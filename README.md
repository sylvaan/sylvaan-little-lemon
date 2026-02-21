# Little Lemon Web Application

This repository contains the front-end web application for **Little Lemon**, a fictional family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.

This project was built as the capstone assignment for the **Meta Front-End Developer Professional Certificate** on Coursera.

## Project Features

This Minimum Viable Product (MVP) specifically implements the following requirements:

- **Responsive Landing Page:** A modern, accessible home page that adapts to both mobile and desktop screens.
- **Table Booking System (End-to-End):** A complete reservation flow allowing users to pick a date, time, number of guests, and occasion.
- **Robust Form Validation:** Built using Formik and Yup to ensure user inputs are valid (e.g., preventing past dates, enforcing minimum advance booking times).
- **State Management:** Utilizing React's `useReducer` (wrapped in a custom hook `useBookingTimes`) to manage the complex state of available booking times dynamically based on the selected date.
- **API Integration:** Interacts with a simulated backend API script to fetch available times and submit the booking data.
- **A11y (Accessibility):** Developed with semantic HTML and appropriate ARIA labels for screen readers.
- **Comprehensive Unit Testing:** Uses Vitest and React Testing Library to validate the reducer functions, form behaviors, and HTML5 validation integration.

## Technologies Used

- **Framework:** React 18, Vite
- **Language:** TypeScript
- **Styling & UI:** Chakra UI (v3), vanilla CSS
- **Routing:** React Router DOM (v7)
- **Form Handling:** Formik, Yup
- **State Management:** React Hooks (`useState`, `useReducer`, Custom Hooks)
- **Testing:** Vitest, React Testing Library, jsdom

## Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

You must have [Node.js](https://nodejs.org/) installed (v16 or higher is recommended).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/sylvaan/sylvaan-little-lemon.git
   ```
2. Navigate into the project directory:
   ```bash
   cd sylvaan-little-lemon
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) to view it in the browser.

### Running Tests

To run the Vitest test suite and ensure all components and reducers are working correctly:

```bash
npm run test
```

## Project Demo

The home page features a Hero section, Highlights/Specials, Testimonials, and an About component. The core functional requirement lies within the **Reservations** page, which allows real-time selection of available dining slots.
