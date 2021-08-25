export const getLocalValue = (name: string): any => {
  try {
    const serializedData = localStorage.getItem(name);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
};

export const setLocalValue = (name: string, value: any): void => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(name, serializedData);
  } catch {}
};

export const removeLocalValue = (name: string): void => {
  try {
    localStorage.removeItem(name);
  } catch {}
};
