// bookingUtils.test.js
import { initializeTimes, updateTimes } from './bookingUtils';
import { fetchAPI } from '../component/api'; // Correct path

jest.mock('../component/api', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));


describe('BookingUtils', () => {
  const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  beforeEach(() => {
    fetchAPI.mockImplementation(() => mockTimes);
  });

  test('initializeTimes returns correct default time slots', () => {
    const result = initializeTimes();
    console.log("initializeTimes() returned:", result);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes returns updated time slots based on action date', () => {
    const action = { date: '2025-07-23' };
    const result = updateTimes([], action);
    expect(result).toEqual(mockTimes);
  });
});
