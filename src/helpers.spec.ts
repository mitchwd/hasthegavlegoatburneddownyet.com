import { describe, expect, test } from 'vitest';
import { getFirstSundayOfAdvent, getFirstWeekdayAfterNewYearsDay, isDateInAdventSeason } from './helpers';

describe('getFirstSundayOfAdvent', () => {
  test('when Christmas is on a Saturday', () => {
    const firstSundayOfAdvent = getFirstSundayOfAdvent(2021);
    expect(firstSundayOfAdvent).toEqual(new Date('2021-11-28T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('söndag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('Sunday');
  });

  test('when Christmas is on a Sunday', () => {
    const firstSundayOfAdvent = getFirstSundayOfAdvent(2025);
    expect(firstSundayOfAdvent).toEqual(new Date('2025-11-30T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('söndag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('Sunday');
  });

  test('when Christmas is on a Monday', () => {
    const firstSundayOfAdvent = getFirstSundayOfAdvent(2023);
    expect(firstSundayOfAdvent).toEqual(new Date('2023-12-03T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('söndag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('Sunday');
  });

  test('on a leap year (2020)', () => {
    const firstSundayOfAdvent = getFirstSundayOfAdvent(2020);
    expect(firstSundayOfAdvent).toEqual(new Date('2020-11-29T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('söndag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('Sunday');
  });

  test('on a leap year (2024)', () => {
    const firstSundayOfAdvent = getFirstSundayOfAdvent(2024);
    expect(firstSundayOfAdvent).toEqual(new Date('2024-12-01T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('söndag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(firstSundayOfAdvent)).toEqual('Sunday');
  });
});

describe('getFirstWeekdayAfterNewYear', () => {
  test('when New Years Day is on a Friday, should return Monday', () => {
    const nextWeekday = getFirstWeekdayAfterNewYearsDay(2021);
    expect(nextWeekday).toEqual(new Date('2021-01-04T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(nextWeekday)).toEqual('måndag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(nextWeekday)).toEqual('Monday');
  });

  test('when New Years Day is on a Saturday, should return Monday', () => {
    const nextWeekday = getFirstWeekdayAfterNewYearsDay(2022);
    expect(nextWeekday).toEqual(new Date('2022-01-03T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(nextWeekday)).toEqual('måndag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(nextWeekday)).toEqual('Monday');
  });

  test('when New Years Day is on a Sunday, should return Tuesday', () => {
    const nextWeekday = getFirstWeekdayAfterNewYearsDay(2023);
    expect(nextWeekday).toEqual(new Date('2023-01-03T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(nextWeekday)).toEqual('tisdag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(nextWeekday)).toEqual('Tuesday');
  });

  test('when New Years Day is on a Monday, should return Tuesday', () => {
    const nextWeekday = getFirstWeekdayAfterNewYearsDay(2024);
    expect(nextWeekday).toEqual(new Date('2024-01-02T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(nextWeekday)).toEqual('tisdag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(nextWeekday)).toEqual('Tuesday');
  });

  test('when New Years Day is on a Tuesday, should return Wednesday', () => {
    const nextWeekday = getFirstWeekdayAfterNewYearsDay(2030);
    expect(nextWeekday).toEqual(new Date('2030-01-02T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(nextWeekday)).toEqual('onsdag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(nextWeekday)).toEqual('Wednesday');
  });

  test('when New Years Day is on a Wednesday, should return Thursday', () => {
    const nextWeekday = getFirstWeekdayAfterNewYearsDay(2025);
    expect(nextWeekday).toEqual(new Date('2025-01-02T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(nextWeekday)).toEqual('torsdag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(nextWeekday)).toEqual('Thursday');
  });

  test('when New Years Day is on a Thursday, should return Friday', () => {
    const nextWeekday = getFirstWeekdayAfterNewYearsDay(2026);
    expect(nextWeekday).toEqual(new Date('2026-01-02T00:00:00.000Z'));
    expect(new Intl.DateTimeFormat('sv-SE', { weekday: 'long' }).format(nextWeekday)).toEqual('fredag');
    expect(new Intl.DateTimeFormat('en-AU', { weekday: 'long' }).format(nextWeekday)).toEqual('Friday');
  });
});

describe('isDateInAdventSeason', () => { 
  // Helper function to create UTC date
  const createUTCDate = (year: number, month: number, day: number): Date => {
    return new Date(Date.UTC(year, month - 1, day, 9, 0, 0)); // 9am UTC
  };

  test('should return true for First Sunday of Advent', () => {
    expect(isDateInAdventSeason(createUTCDate(2023, 12, 3))).toBe(true);
    expect(isDateInAdventSeason(createUTCDate(2024, 12, 1))).toBe(true);
    expect(isDateInAdventSeason(createUTCDate(2025, 11, 30))).toBe(true);
  });

  test('should return false for day before First Sunday of Advent', () => {
    expect(isDateInAdventSeason(createUTCDate(2023, 12, 2))).toBe(false);
    expect(isDateInAdventSeason(createUTCDate(2024, 11, 30))).toBe(false);
    expect(isDateInAdventSeason(createUTCDate(2025, 11, 29))).toBe(false);
  });

  test('should return true for last day of Advent season', () => {
    expect(isDateInAdventSeason(createUTCDate(2024, 1, 2))).toBe(true);
    expect(isDateInAdventSeason(createUTCDate(2025, 1, 2))).toBe(true);
    expect(isDateInAdventSeason(createUTCDate(2026, 1, 2))).toBe(true);
  });

  test('should return false for day after last day of Advent season', () => {
    expect(isDateInAdventSeason(createUTCDate(2024, 1, 3))).toBe(false);
    expect(isDateInAdventSeason(createUTCDate(2025, 1, 3))).toBe(false);
    expect(isDateInAdventSeason(createUTCDate(2026, 1, 3))).toBe(false);
  });

  test('should handle New Year\'s Day on Sunday correctly', () => {
    // 2022-2023: January 3, 2023 (Tuesday) should be the last day (because Jan 1 is Sunday, Jan 2 is holiday)
    expect(isDateInAdventSeason(createUTCDate(2023, 1, 3))).toBe(true);
    // January 4, 2023 should be outside Advent season
    expect(isDateInAdventSeason(createUTCDate(2023, 1, 4))).toBe(false);
  });

  test('should handle New Year\'s Day on Friday correctly', () => {
    // 2026-2027: January 4, 2027 (Monday) should be the last day
    expect(isDateInAdventSeason(createUTCDate(2027, 1, 4))).toBe(true);
    // January 5, 2027 should be outside Advent season
    expect(isDateInAdventSeason(createUTCDate(2027, 1, 5))).toBe(false);
  });

});