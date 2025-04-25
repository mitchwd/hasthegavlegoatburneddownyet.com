import Footer from './Footer';
import Message from './Message';
import gavlebocken from './assets/gavlebocken.webp';
import './index.css';

export default function App() {
  return (
    <>
      <div aria-hidden='true'>
        <img
          src={gavlebocken}
          alt='A background image of a straw goat.'
          className='absolute h-full w-full object-cover opacity-50'
        />
        <div className='w-screen h-screen bg-linear-to-b from-gray-500 to-white opacity-50'>
          {/* Gradient overlay */}
        </div>
      </div>
      <main className='w-screen h-screen fixed top-0 left-0 right-0 mt-60'>
        <Message />
        <a
          href='https://www.visitgavle.se/en/gavle-goat'
          id='button'
          target='_self'
          rel='noreferrer'
          className='mt-8 p-3 rounded-md bg-gray-200 w-40 mx-auto shadow-sm text-md font-medium hover:bg-gray-100 hover:text-gray-800 block'
        >
          Find out more
        </a>

        <div className='my-10'>
          <a
            href='https://en.wikipedia.org/wiki/Gävle_goat'
            className='p-3 mr-1 bg-gray-200 hover:text-grey-900 hover:bg-white rounded-full h-12 w-12 inline-block shadow-md'
            aria-label='Wikipedia'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
              className='w-6 h-6 block'
            >
              {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
              <path d='M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z' />
            </svg>
          </a>
          <a
            href='https://www.instagram.com/gavlebocken/'
            className='p-3 mr-1 bg-gray-200 hover:text-grey-900 hover:bg-pink-500 rounded-full h-12 w-12 inline-block shadow-md'
            aria-label='Instagram'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='w-6 h-6 block'
            >
              {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
              <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
            </svg>
          </a>
          <a
            href='https://www.youtube.com/watch?v=-zjJpFYtx9s'
            className='p-3 bg-gray-200 hover:text-grey-900 hover:bg-red-600 rounded-full h-12 w-12 inline-block shadow-md'
            aria-label='Youtube'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='w-6 h-6 block'
            >
              {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
              <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
      {/* <SpeedInsights /> */}
      {/* <Analytics /> */}
    </>
  );
}
