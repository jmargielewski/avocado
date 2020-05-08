export const loadLocalStorage = (key: string): string | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const setLocalStorage = <T>(key: string, state: T): void => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(key, serializedState);
  } catch (e) {
    // TODO: handle local storage error
    // console.error('Local Storage Error:', e);
  }
};

export const clearLocalStorage = (key: string): void => localStorage.removeItem(key);
