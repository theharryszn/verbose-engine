export const updateJSONData = (key, newData) => {
  localStorage.setItem(key, JSON.stringify(newData));
};

export const getJSONData = (key) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};
