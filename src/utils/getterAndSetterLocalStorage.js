export const setLocalStorage = (key, value) => {
  if (value) {
    localStorage.setItem(key, value);
  }
};

export const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (value) {
    return value;
  }
  return null;
};
