import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import ConfirmedBooking from './pages/ConfirmedBooking'
import { useBookingTimes } from './hooks/useBookingTimes'
import { Toaster } from './components/ui/toaster'
import './App.css'

function App() {
  const { availableTimes, dispatch } = useBookingTimes()

  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
