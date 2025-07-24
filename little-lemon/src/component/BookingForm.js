// src/component/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';
import { useNavigate } from 'react-router';

function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = (fieldValues = formData) => {
    const temp = { ...errors };

    if ('date' in fieldValues)
      temp.date = fieldValues.date ? '' : 'Date is required.';

    if ('time' in fieldValues)
      temp.time = fieldValues.time ? '' : 'Time is required.';

    if ('guests' in fieldValues) {
      const value = parseInt(fieldValues.guests, 10);
      if (!value) temp.guests = 'Number of guests is required.';
      else if (value < 1 || value > 10)
        temp.guests = 'Guests must be between 1 and 10.';
      else temp.guests = '';
    }

    if ('occasion' in fieldValues)
      temp.occasion = fieldValues.occasion ? '' : 'Occasion is required.';

    setErrors({ ...temp });
    setIsValid(Object.values(temp).every((x) => x === ''));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    validate({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (isValid) {
      alert('Form submitted successfully!');
      navigate('/confirmed')
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        required
        aria-required="true"
        aria-label="Reservation date"
        aria-invalid={!!errors.date}
        aria-describedby="date-error"
        value={formData.date}
        onChange={handleChange}
      />
      <div>{errors.date}</div>

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        required
        aria-required="true"
        aria-label="Reservation time"
        aria-invalid={!!errors.time}
        aria-describedby="time-error"
        value={formData.time}
        onChange={handleChange}
      >
        <option value="">Select time</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
      </select>
      <div>{errors.time}</div>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        required
        aria-required="true"
        aria-label="Number of guests"
        aria-invalid={!!errors.guests}
        aria-describedby="guests-error"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />
      <div>{errors.guests}</div>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        required
        aria-required="true"
        aria-label="Occasion"
        aria-invalid={!!errors.occasion}
        aria-describedby="occasion-error"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <div>{errors.occasion}</div>

      <button type="submit" aria-label="Submit form" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default BookingForm;
