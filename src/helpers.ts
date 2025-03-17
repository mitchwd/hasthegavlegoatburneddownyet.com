export function getFirstSundayOfAdvent(year: number): Date {
   const christmas = new Date(Date.UTC(year, 11, 25)); // December 25th (month is 0-indexed)
  
  // Get the day of the week for Christmas in UTC (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const christmasDayOfWeek = christmas.getUTCDay();
  
  // Calculate days to the Sunday before Christmas
  // If Christmas is on Sunday (0), we need to go back 7 days to find the previous Sunday
  const daysToFirstSunday = christmasDayOfWeek === 0 ? 7 : christmasDayOfWeek;
  
  // Calculate the date of the first Sunday before Christmas
  const firstSundayBeforeChristmas = new Date(christmas);
  firstSundayBeforeChristmas.setUTCDate(christmas.getUTCDate() - daysToFirstSunday);
  
  // Calculate the date of the 4th Sunday before Christmas (3 weeks before the first Sunday)
  const fourthSundayBeforeChristmas = new Date(firstSundayBeforeChristmas);
  fourthSundayBeforeChristmas.setUTCDate(firstSundayBeforeChristmas.getUTCDate() - (3 * 7));
  
  return fourthSundayBeforeChristmas;
};

export function getFirstWeekdayAfterNewYearsDay(year: number): Date {
  // Create date object for January 1st of the given year
  const newYearsDay = new Date(Date.UTC(year, 0, 1)); // January 1st (month is 0-indexed)
  
  // Get the day of the week for New Year's Day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = newYearsDay.getUTCDay();
  
  let daysToAdd = 1; // Start by adding 1 day to New Year's Day
  
  // If New Year's Day is Friday (5), the next weekday is Monday (+3 days)
  if (dayOfWeek === 5) {
    daysToAdd = 3;
  } 
  // If New Year's Day is Saturday (6), the next weekday is Monday (+2 days)
  else if (dayOfWeek === 6) {
    daysToAdd = 2;
  }
  // If New Year's Day is Sunday (0), the Monday is a public holiday, so we want Tuesday (+2 days)
  else if (dayOfWeek === 0) {
    daysToAdd = 2;
  }
  // For all other days (1-4), the next weekday is the next day (+1 day)
  
  // Create the result date by adding the appropriate number of days
  const firstWeekday = new Date(newYearsDay);
  firstWeekday.setUTCDate(newYearsDay.getUTCDate() + daysToAdd);
  
  return firstWeekday;
};

export function isDateInAdventSeason(date: Date): boolean {
  const month = date.getUTCMonth(); // 0 for January
  const year = date.getUTCFullYear();
  
  // If we're in January, we need to use the previous year's Advent season
  const adventYear = month === 0 ? year - 1 : year;
  
  const firstSundayOfAdvent = getFirstSundayOfAdvent(adventYear);
  const firstWeekdayAfterNewYear = getFirstWeekdayAfterNewYearsDay(adventYear + 1);
  
  const normalizedDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const normalizedStart = new Date(Date.UTC(firstSundayOfAdvent.getUTCFullYear(), firstSundayOfAdvent.getUTCMonth(), firstSundayOfAdvent.getUTCDate()));
  const normalizedEnd = new Date(Date.UTC(firstWeekdayAfterNewYear.getUTCFullYear(), firstWeekdayAfterNewYear.getUTCMonth(), firstWeekdayAfterNewYear.getUTCDate()));
  
  return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd;
}