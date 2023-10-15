export const setToLocalStorage = (key: string, email: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, email);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
