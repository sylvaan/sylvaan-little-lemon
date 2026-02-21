
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

interface BookingPageProps {
  availableTimes: string[];
  dispatch: React.Dispatch<{ type: string; payload: string }>;
}

const BookingPage = ({ availableTimes, dispatch }: BookingPageProps) => {
  const navigate = useNavigate();

  const submitForm = (formData: Record<string, string | number>) => {
    // Check if API is available and mock submission
    if (typeof window !== "undefined" && typeof window.submitAPI === "function") {
      const isSuccess = window.submitAPI(formData);
      if (isSuccess) {
        navigate("/confirmed");
      } else {
          alert("Booking failed. Please try again.");
      }
    } else {
       // Fallback for environment without API script loaded
       alert("Simulated submit success.");
       navigate("/confirmed");
    }
  };

  return (
    <Box bg="#495E57" minH="100vh" py={12}>
       <Helmet>
        <title>Little Lemon - Reservations</title>
        <meta name="description" content="Book a table at Little Lemon. Choose your date, time, and occasion." />
      </Helmet>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </Box>
  );
};

export default BookingPage;
