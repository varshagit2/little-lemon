// src/utils/bookingUtils.js
// To this (correct relative path from utils to component/api.js):
import { fetchAPI } from '../component/api';

jest.mock('../component/api', () => ({
  fetchAPI: jest.fn(),
}));

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};
