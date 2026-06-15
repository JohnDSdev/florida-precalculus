// Docs: https://www.instantdb.com/docs/permissions

import type { InstantRules } from "@instantdb/core";

const rules = {
  attrs: {
    allow: {
      $default: "false",
    },
  },
  feedback: {
    allow: {
      view: "auth.id != null && auth.id == data.ownerId",
      create: "auth.id != null && auth.id == newData.ownerId",
      delete: "false",
      update: "false",
    },
  },
  profiles: {
    allow: {
      view: "auth.id != null && auth.id == data.ownerId",
      create: "auth.id != null && auth.id == newData.ownerId",
      delete: "auth.id != null && auth.id == data.ownerId",
      update:
        "auth.id != null && auth.id == data.ownerId && auth.id == newData.ownerId",
    },
  },
  learnerProgress: {
    allow: {
      view: "auth.id != null && auth.id == data.ownerId",
      create: "auth.id != null && auth.id == newData.ownerId",
      delete: "auth.id != null && auth.id == data.ownerId",
      update:
        "auth.id != null && auth.id == data.ownerId && auth.id == newData.ownerId",
    },
  },
} satisfies InstantRules;

export default rules;
