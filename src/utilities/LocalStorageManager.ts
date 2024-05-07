// Enumeración de claves para el almacenamiento local
export enum LocalStorageKeys {
  REFRESH_TOKEN = "refreshToken",
  ACCESS_TOKEN = "accessToken",
}

// Guardar un valor en el almacenamiento local
export const localStorageSave = (key: string, value: string) => {
  if (!value) {
    localStorageClear(key);
  } else {
    localStorage.setItem(key, value);
  }
};

// Obtener un valor del almacenamiento local
export const localStorageGet = (key: string): string | null => {
  return localStorage.getItem(key);
};

// Persistir un objeto serializado en el almacenamiento local
export const localStoragePersist = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error persisting value for key ${key}:`, error);
  }
};

// Limpiar un valor del almacenamiento local
export const localStorageClear = (key: string) => {
  localStorage.removeItem(key);
};
