const rules = {
  attrs: {
    allow: {
      $default: 'false',
    },
  },
  profiles: {
    allow: {
      view: 'auth.id != null && auth.id == data.ownerId',
      create: 'auth.id != null && auth.id == newData.ownerId',
      update: 'auth.id != null && auth.id == data.ownerId && auth.id == newData.ownerId',
      delete: 'auth.id != null && auth.id == data.ownerId',
    },
  },
  learnerProgress: {
    allow: {
      view: 'auth.id != null && auth.id == data.ownerId',
      create: 'auth.id != null && auth.id == newData.ownerId',
      update: 'auth.id != null && auth.id == data.ownerId && auth.id == newData.ownerId',
      delete: 'auth.id != null && auth.id == data.ownerId',
    },
  },
  feedback: {
    allow: {
      view: 'auth.id != null && auth.id == data.ownerId',
      create: 'auth.id != null && auth.id == newData.ownerId',
      update: 'false',
      delete: 'false',
    },
  },
};

export default rules;
