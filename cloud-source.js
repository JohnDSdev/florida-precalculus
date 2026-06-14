import { init, id } from '@instantdb/core';

const APP_ID = '1fb3bc72-975d-4d6b-ad63-4ad593506646';
const db = init({ appId: APP_ID, devtool: false });
const cloud = {
  user: null,
  profile: null,
  feedback: [],
  ready: false,
  error: '',
  sentEmail: '',
  unsubscribeData: null,
};

function emit(name, detail = {}) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

function errorMessage(error) {
  return error?.body?.message || error?.message || 'Something went wrong. Please try again.';
}

function subscribeUserData(user) {
  cloud.unsubscribeData?.();
  cloud.ready = false;
  cloud.unsubscribeData = db.subscribeQuery({
    profiles: { $: { where: { ownerId: user.id } } },
    learnerProgress: { $: { where: { ownerId: user.id } } },
    feedback: { $: { where: { ownerId: user.id }, order: { createdAt: 'desc' }, limit: 12 } },
  }, (result) => {
    if (result.error) {
      cloud.error = errorMessage(result.error);
      emit('linework-cloud-error', { message: cloud.error });
      return;
    }
    if (!result.data) return;
    cloud.profile = result.data.profiles?.[0] || null;
    cloud.feedback = result.data.feedback || [];
    cloud.ready = true;
    const document = result.data.learnerProgress?.[0];
    let progress = null;
    if (document?.stateJson) {
      try { progress = JSON.parse(document.stateJson); } catch { progress = null; }
    }
    emit('linework-cloud-data', { progress, profile: cloud.profile, feedback: cloud.feedback });
  });
}

db.subscribeAuth((auth) => {
  cloud.user = auth.user || null;
  cloud.error = auth.error ? errorMessage(auth.error) : '';
  if (cloud.user) subscribeUserData(cloud.user);
  else {
    cloud.unsubscribeData?.();
    cloud.unsubscribeData = null;
    cloud.profile = null;
    cloud.feedback = [];
    cloud.ready = false;
  }
  emit('linework-auth', { user: cloud.user, error: cloud.error });
});

window.LineworkCloud = {
  get user() { return cloud.user; },
  get profile() { return cloud.profile; },
  get feedback() { return cloud.feedback; },
  get ready() { return cloud.ready; },
  async sendCode(email) {
    cloud.sentEmail = email.trim();
    await db.auth.sendMagicCode({ email: cloud.sentEmail });
  },
  async verifyCode(code) {
    await db.auth.signInWithMagicCode({ email: cloud.sentEmail, code: code.trim() });
  },
  async signOut() { await db.auth.signOut(); },
  async saveProgress(snapshot) {
    if (!cloud.user || !cloud.ready) return;
    await db.transact(db.tx.learnerProgress[cloud.user.id].update({
      ownerId: cloud.user.id,
      stateJson: JSON.stringify(snapshot),
      updatedAt: Date.now(),
    }));
  },
  async saveUsername(username) {
    if (!cloud.user) throw new Error('Sign in first.');
    const clean = username.trim().slice(0, 30);
    if (!clean) throw new Error('Enter a username.');
    await db.transact(db.tx.profiles[cloud.user.id].update({
      ownerId: cloud.user.id,
      username: clean,
      updatedAt: Date.now(),
    }));
  },
  async sendFeedback({ username, message, lessonId, view }) {
    if (!cloud.user) throw new Error('Sign in before sending feedback.');
    const cleanName = username.trim().slice(0, 30);
    const cleanMessage = message.trim().slice(0, 2000);
    if (!cleanName || !cleanMessage) throw new Error('Add a username and feedback message.');
    await db.transact([
      db.tx.profiles[cloud.user.id].update({ ownerId: cloud.user.id, username: cleanName, updatedAt: Date.now() }),
      db.tx.feedback[id()].update({
        ownerId: cloud.user.id,
        username: cleanName,
        message: cleanMessage,
        lessonId: lessonId || 'portal',
        view: view || 'portal',
        createdAt: Date.now(),
      }),
    ]);
  },
};

emit('linework-cloud-ready');
