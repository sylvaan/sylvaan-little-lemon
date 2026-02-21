import { Box } from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster";
import { Helmet } from "react-helmet-async";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface BookingPageProps {
  availableTimes: string[];
  dispatch: React.Dispatch<{ type: string; payload: string }>;
}

const BookingPage = ({ availableTimes, dispatch }: BookingPageProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: Record<string, string | number>) => {
    setIsSubmitting(true);
    
    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (typeof window !== "undefined" && typeof window.submitAPI === "function") {
      const isSuccess = window.submitAPI(formData);
      setIsSubmitting(false);

      if (isSuccess) {
        toaster.create({
          title: "Reservation successful.",
          description: "Your table has been booked.",
          type: "success",
          duration: 5000,
        });
        navigate("/confirmed");
      } else {
        toaster.create({
          title: "Booking failed.",
          description: "We couldn't process your reservation. Please try again.",
          type: "error",
          duration: 5000,
        });
      }
    } else {
       setIsSubmitting(false);
       toaster.create({
          title: "Simulated Success.",
          description: "API not found, but simulating success flow.",
          type: "info",
          duration: 3000,
       });
       navigate("/confirmed");
    }
  };

  return (
    <Box bg="#495E57" minH="100vh" py={12}>
       <Helmet>
        <title>Little Lemon - Reservations</title>
        <meta name="description" content="Book a table at Little Lemon. Choose your date, time, and occasion." />
      </Helmet>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} isSubmitting={isSubmitting} />
    </Box>
  );
};

export default BookingPage;
