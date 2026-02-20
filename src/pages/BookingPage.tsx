
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import BookingForm from "../components/BookingForm";

interface BookingPageProps {
  availableTimes: string[];
  dispatch: React.Dispatch<{ type: string; payload: string }>;
}

const BookingPage = ({ availableTimes, dispatch }: BookingPageProps) => {
  return (
    <Box bg="#495E57" minH="100vh" py={12}>
       <Helmet>
        <title>Little Lemon - Reservations</title>
        <meta name="description" content="Book a table at Little Lemon. Choose your date, time, and occasion." />
      </Helmet>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </Box>
  );
};

export default BookingPage;
