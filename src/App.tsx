import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import { initializeTimes, updateTimes } from './reducers/timesReducer'
import './App.css'

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
