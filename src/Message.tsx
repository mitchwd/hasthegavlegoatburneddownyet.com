import { format } from 'date-fns';
import {
  getFirstSundayOfAdvent,
  getFirstWeekdayAfterNewYearsDay,
  isDateInAdventSeason,
} from './helpers';

function Message({ fallenString }: { fallenString?: string } = {}) {
  // If fallenString is provided, use it; otherwise use the environment variable. This is used for testing.
  const dateString = fallenString || import.meta.env.VITE_FALLEN_DATE;

  // Create a new date from the string if available, otherwise use very old date.
  const fallenDate = dateString ? new Date(dateString) : new Date('1970-01-01');

  const currentDate = new Date();
  const year = currentDate.getFullYear();

  const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
  const firstWeekdayAfterNewYear = getFirstWeekdayAfterNewYearsDay(year + 1);

  const isInSeason = isDateInAdventSeason(currentDate);
  const hasFallen =
    fallenDate >= firstSundayOfAdvent && fallenDate <= firstWeekdayAfterNewYear;

  let message;
  let sub_message;

  // If the goat has fallen, show the RIP message
  if (hasFallen) {
    message = 'Yes. RIP Gävlebocken. 🔥';
    sub_message = `${format(firstSundayOfAdvent, 'MMMM do')} - ${format(
      fallenDate,
      'MMMM do, yyyy'
    )}`;
  } else {
    message = isInSeason
      ? 'Gävlebocken is standing tall!  \n🐐🔥🧯'
      : `It's not Christmas time yet! \nCheck back on ${format(
          firstSundayOfAdvent,
          'MMMM do, yyyy'
        )}.`;
    sub_message = isInSeason
      ? `The goat has been standing since ${format(
          firstSundayOfAdvent,
          'MMMM do, yyyy'
        )}.`
      : '🐐🔥🧯';
  }

  return (
    <>
      <h1 className='text-lg uppercase mb-2'>
        Has the Gävle Goat burned down yet?
      </h1>
      <h2
        className='text-5xl text-white font-heavy mb-2 drop-shadow-md whitespace-pre'
        data-testid='message'
      >
        {message}
      </h2>
      <h3
        className='text-xl font-medium whitespace-pre'
        data-testid='subMessage'
      >
        {sub_message}
      </h3>
    </>
  );
}

export default Message;
