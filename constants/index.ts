export const TASK_STATUS_TO_DO = "todo";
export const TASK_STATUS_IN_PROGRESS = "in-progress";
export const TASK_STATUS_DONE = "done";
export const TASK_STATUS_DELETED = "deleted";
export const TASK_STATUS_CANCELED = "canceled";

export const ICONS = {
  [TASK_STATUS_TO_DO]: "assignment",
  [TASK_STATUS_IN_PROGRESS]: "autorenew",
  [TASK_STATUS_DONE]: "assignment_turned_in",
  [TASK_STATUS_DELETED]: "delete",
  [TASK_STATUS_CANCELED]: "cancel",
};

export const COLORS = {
  [TASK_STATUS_TO_DO]: "grey",
  [TASK_STATUS_IN_PROGRESS]: "blue",
  [TASK_STATUS_DONE]: "green",
  [TASK_STATUS_DELETED]: "red",
  [TASK_STATUS_CANCELED]: "black",
};
