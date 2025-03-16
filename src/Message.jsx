import { format } from 'date-fns';
// import MockDate from 'mockdate';

function Message() {
  const fallenDate = new Date(import.meta.env.VITE_FALLEN_DATE);

  // TESTING: Set a fake date
  // MockDate.set('2025-05-01'); // Pre advent
  // MockDate.set('2025-12-10'); // Within advent
  // MockDate.set('2026-02-01'); // In the new year
  // MockDate.set('2027-12-01'); // Manual date where NYD falls on a weekend.

  const getFirstSundayOfAdvent = (year) => {
    // Christmas Day is December 25, so we need to calculate the Sunday four weeks prior.
    const christmas = new Date(year, 11, 25); // December 25th
    const dayOfWeek = christmas.getDay(); // Get day of week (0 = Sunday, 6 = Saturday)

    // Calculate the difference between Christmas and the first Sunday of Advent
    const daysToSunday = (dayOfWeek + 3) % 7; // The first Sunday of Advent is 4 Sundays before Christmas
    const firstSundayOfAdvent = new Date(christmas);
    firstSundayOfAdvent.setDate(christmas.getDate() - daysToSunday - 28); // Subtract 28 days for the 4th Sunday before Christmas

    return firstSundayOfAdvent;
  };

  // Helper function to get the first weekday after New Year's Day.
  const getFirstWeekdayAfterNewYear = (year) => {
    const newYear = new Date(year, 0, 1); // January 1st
    let firstWeekday = new Date(newYear);

    // Move to the next weekday if January 1st is on a weekend
    if (firstWeekday.getDay() === 0) { // Sunday
      firstWeekday.setDate(newYear.getDate() + 1); // Monday
    } else if (firstWeekday.getDay() === 6) { // Saturday
      firstWeekday.setDate(newYear.getDate() + 2); // Monday
    } else {
      firstWeekday = new Date(newYear);
    }

    return firstWeekday;
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();

  const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
  const firstWeekdayAfterNewYear = getFirstWeekdayAfterNewYear(year + 1);

  // Check if the current date is between the first Sunday of Advent and the final date
  const isInSeason = currentDate >= firstSundayOfAdvent && currentDate <= firstWeekdayAfterNewYear;
  const hasFallen = fallenDate >= firstSundayOfAdvent && fallenDate <= firstWeekdayAfterNewYear;
  
  console.debug('currentDate', currentDate)
  console.debug('firstSundayOfAdvent', firstSundayOfAdvent)
  console.debug('firstWeekdayAfterNewYear', firstWeekdayAfterNewYear)
  console.debug('isInSeason', isInSeason)
  console.debug('fallenDate', fallenDate)
  console.debug('hasFallen', hasFallen)

  let message;
  let sub_message;

  // If the goat has fallen, show the RIP message
  if (hasFallen) {
    message =  'Yes. RIP Gävlebocken. 🔥';
    sub_message = `${format(firstSundayOfAdvent, 'MMMM do')} - ${format(fallenDate, 'MMMM do, yyyy')}`;
  } else {
    message = isInSeason ? 'Gävlebocken is standing tall!  \n🐐🔥🧯' : `It's not Christmas time yet! \nCheck back on ${format(firstSundayOfAdvent, 'MMMM do, yyyy')}.`;
    sub_message = isInSeason ? `The goat has been standing since ${format(firstSundayOfAdvent, 'MMMM do, yyyy')}.` : '🐐🔥🧯';
  }

  return (
    <>
      <h1 className="text-lg uppercase mb-2">
        Has the Gävle Goat burned down yet?
      </h1>
      <h2
        className="text-5xl text-white font-heavy mb-2 drop-shadow-md whitespace-pre"
      >
        {message}
      </h2>
      <h3 className="text-xl font-medium whitespace-pre">
        {sub_message}
      </h3>
    </>
  );
}

export default Message;