export const getLocalValue = (name: string) => {
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

export const setLocalValue = (name: string, value: string | string[]): void => {
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

export const reformLastVisited = (nextCountry: string): string[] => {
  const _lastVisited: string[] | undefined = getLocalValue("lastVisited");
  if (!_lastVisited) return [nextCountry];
  if (_lastVisited.includes(nextCountry)) {
    const index = _lastVisited.indexOf(nextCountry);
    _lastVisited.splice(index, 1);
  } else if (_lastVisited.length >= 5) {
    _lastVisited.splice(4);
  }
  _lastVisited.unshift(nextCountry);
  return _lastVisited;
};
