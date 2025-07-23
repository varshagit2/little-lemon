import React from 'react';
import BookingForm from './BookingForm';


const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <section>
      <h1>Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
};

export default BookingPage;
