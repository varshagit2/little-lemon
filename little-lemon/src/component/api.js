// src/component/api.js

export const fetchAPI = (date) => {
  // Mock available times (you can customize this)
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export const submitAPI = (formData) => {
  console.log("Submitted Data:", formData);
  return true; // simulate success
};
