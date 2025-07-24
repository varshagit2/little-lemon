// src/component/BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm HTML5 validation', () => {
  test('renders date input with required attribute', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test('renders guests input with min and max attributes', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('renders time select with required attribute', () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test('renders occasion select with required attribute', () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe('BookingForm JavaScript validation', () => {
  test('submit button is disabled initially', () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });

  test('submit button enables when form is valid', () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-07-30' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeEnabled();
  });

  test('submit button remains disabled if guests number is invalid', () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '0' }, // Invalid
    });
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });
});
