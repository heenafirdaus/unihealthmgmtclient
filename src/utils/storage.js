const setStoreData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getStoreData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
const removeStorageData = (key) => {
  localStorage.removeItem(key);
};
export { setStoreData, getStoreData, removeStorageData };
