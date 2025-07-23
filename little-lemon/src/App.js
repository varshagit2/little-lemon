import './App.css';
import Navigation from './component/Navigation';
import BookingForm from './component/BookingForm';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './component/ConfirmedBooking';
import Main from './component/Main';

function App() {

  return (
    <>
       <Navigation/>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

    </>
  );
}

export default App;
