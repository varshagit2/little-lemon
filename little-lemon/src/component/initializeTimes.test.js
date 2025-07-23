import { initializeTimes } from '../utils/bookingUtils';
import { fetchAPI } from './api';

jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

test('initializeTimes returns mock time slots', () => {
  const mockTimes = ['17:00', '18:00'];
  fetchAPI.mockReturnValue(mockTimes); // use imported fetchAPI, not api.fetchAPI

  const result = initializeTimes();
  expect(result).toEqual(mockTimes);
});
