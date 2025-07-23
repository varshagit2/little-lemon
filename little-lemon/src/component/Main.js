/* global fetchAPI, submitAPI */
import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { submitAPI } from './api';
import { fetchAPI } from './api';



const initializeTimes = () => fetchAPI(new Date());

const updateTimes = (state, action) => {
  return fetchAPI(new Date(action));
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
    }
  };

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
};

export default Main;
