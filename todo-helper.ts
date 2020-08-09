const storageKey = "todos__list";
export enum STATUS {
  NEW = "todo",
  IN_PROGRESS = "in-progress",
  DONE = "done",
  CANCELED = "canceled",
  DELETED = "deleted",
}

export function persistTodos(list:any) {
  try {
    window.localStorage && window.localStorage.setItem(storageKey, JSON.stringify(list));
  } catch (error) {
    console.warn(error);
  }
}

export function readLocalTodos(): { [key: string]: { status: string } } {
  try {
    const persisted = window.localStorage.getItem(storageKey) || "[]";
    const data = JSON.parse(persisted);
    return data;
  } catch {
    window.localStorage.removeItem(storageKey);
    return {};
  }
}
