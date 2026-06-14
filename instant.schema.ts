import { i } from '@instantdb/core';

const schema = i.schema({
  entities: {
    profiles: i.entity({
      ownerId: i.string().unique().indexed(),
      username: i.string(),
      updatedAt: i.number(),
    }),
    learnerProgress: i.entity({
      ownerId: i.string().unique().indexed(),
      stateJson: i.string(),
      updatedAt: i.number(),
    }),
    feedback: i.entity({
      ownerId: i.string().indexed(),
      username: i.string(),
      message: i.string(),
      lessonId: i.string(),
      view: i.string(),
      createdAt: i.number().indexed(),
    }),
  },
});

export default schema;
