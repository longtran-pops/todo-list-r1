export const saveState = (store) =>
  localStorage &&
  localStorage.setItem('app_state', JSON.stringify(store.getState()));

/* eslint-disable no-empty, consistent-return */
export const getState = () => {
  try {
    const state = localStorage.getItem('app_state');
    return JSON.parse(state) || null;
  } catch {}
};
