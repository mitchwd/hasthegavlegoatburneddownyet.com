import { format } from 'date-fns';

import {
  getFirstSundayOfAdvent,
  getFirstWeekdayAfterNewYearsDay,
  isDateInAdventSeason,
} from './helpers';

const getMessages = ({
  hasFallen,
  isInSeason,
  firstSundayOfAdvent,
  fallenDate,
}: {
  hasFallen: boolean;
  isInSeason: boolean;
  firstSundayOfAdvent: Date;
  fallenDate: Date;
}) => {
  if (hasFallen) {
    return {
      message: 'Yes. RIP Gävlebocken. 🔥',
      sub_message: `${format(firstSundayOfAdvent, 'MMMM do')} - ${format(fallenDate, 'MMMM do, yyyy')}`,
    };
  }

  if (isInSeason) {
    return {
      message: 'Gävlebocken is standing tall!  \n🐐🔥🧯',
      sub_message: `The goat has been standing since ${format(firstSundayOfAdvent, 'MMMM do, yyyy')}.`,
    };
  }

  return {
    message: `It's not Christmas time yet! \nCheck back on ${format(firstSundayOfAdvent, 'MMMM do, yyyy')}.`,
    sub_message: '🐐🔥🧯',
  };
};

const Message = ({ fallenString }: { fallenString?: string } = {}) => {
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

  const { message, sub_message } = getMessages({
    fallenDate,
    firstSundayOfAdvent,
    hasFallen,
    isInSeason,
  });

  return (
    <>
      <h1 className='mb-2 text-lg uppercase'>
        Has the Gävle Goat burned down yet?
      </h1>
      <h2
        className='font-heavy mb-2 text-5xl whitespace-pre text-white drop-shadow-md'
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
};

export default Message;
