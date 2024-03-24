export const useLocalStore = (keyName) => {
  const setItem = (value) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(value));
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = (itemName = '') => {
    try {
      const key = itemName || keyName;
      if (!key) return;
      const response = window.localStorage.getItem(key);
      return response ? JSON.parse(response): {};
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = () => {
    try {
      window.localStorage.removeItem(keyName);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  return [setItem, getItem, deleteItem];
};
