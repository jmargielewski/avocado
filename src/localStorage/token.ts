import { loadLocalStorage, setLocalStorage, clearLocalStorage } from './localStorage';

const STORAGE_KEY = 'JWT';

export const getToken = (): string | undefined => loadLocalStorage(STORAGE_KEY);

export const setToken = (token: string): void => setLocalStorage<string>(STORAGE_KEY, token);

export const removeToken = (): void => clearLocalStorage(STORAGE_KEY);
