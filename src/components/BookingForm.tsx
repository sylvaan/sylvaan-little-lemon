import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface BookingFormProps {
  availableTimes: string[];
  dispatch: React.Dispatch<{ type: string; payload: string }>;
  submitForm: (formData: Record<string, string | number>) => void;
  isSubmitting?: boolean;
}

const BookingForm = ({ availableTimes, dispatch, submitForm, isSubmitting = false }: BookingFormProps) => {
  const getLocalDate = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };
  const todayISO = getLocalDate();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "Birthday",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1 guest")
        .max(10, "Max 10 guests")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    formik.setFieldValue("time", "");
  };

  const filteredTimes = availableTimes.filter((time) => {
    if (formik.values.date !== todayISO) return true;

    const [hourStr, minStr] = time.split(":");
    const timeInMinutes = parseInt(hourStr, 10) * 60 + parseInt(minStr, 10);
    const now = new Date();
    const nowInMinutes = now.getHours() * 60 + now.getMinutes();

    return timeInMinutes >= nowInMinutes + 180;
  });

  return (
    <Box bg="white" p={8} borderRadius="xl" boxShadow="lg" maxW="500px" mx="auto" mt={8}>
      <Heading as="h2" size="lg" mb={6} textAlign="center">Book Now</Heading>
      <form onSubmit={formik.handleSubmit}>
        <VStack gap={4} align="stretch">
          
          <Box>
            <Text as="label" htmlFor="date" fontWeight="bold" mb={1} display="block">Choose date</Text>
            <Input
              id="date"
              name="date"
              type="date"
              min={todayISO}
              onChange={handleDateChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              borderColor={formik.errors.date && formik.touched.date ? "red.500" : "gray.200"}
            />
            {formik.errors.date && formik.touched.date && (
              <Text color="red.500" fontSize="sm" mt={1}>{formik.errors.date}</Text>
            )}
          </Box>

          <Box>
            <Text as="label" htmlFor="time" fontWeight="bold" mb={1} display="block">Choose time</Text>
            <Box as="select"
              id="time"
              name="time"
              width="full"
              p={2}
              borderRadius="md"
              border="1px solid"
              borderColor={formik.errors.time && formik.touched.time ? "red.500" : "gray.200"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              outline="none"
              _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
            >
              <option value="" disabled>Select time</option>
              {filteredTimes.length > 0 ? (
                 filteredTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                 ))
              ) : (
                 <option value="" disabled>No times available</option>
              )}
            </Box>
            {formik.values.date === todayISO && (
              <Text fontSize="xs" color="gray.500" mt={1}>
                * Note: Same-day bookings require at least 3 hours advance notice.
              </Text>
            )}
            {formik.errors.time && formik.touched.time && (
              <Text color="red.500" fontSize="sm" mt={1}>{formik.errors.time}</Text>
            )}
          </Box>

          <Box>
             <Text as="label" htmlFor="guests" fontWeight="bold" mb={1} display="block">Number of guests</Text>
            <Input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.guests}
               borderColor={formik.errors.guests && formik.touched.guests ? "red.500" : "gray.200"}
            />
             {formik.errors.guests && formik.touched.guests && (
              <Text color="red.500" fontSize="sm" mt={1}>{formik.errors.guests}</Text>
            )}
          </Box>

          <Box>
            <Text as="label" htmlFor="occasion" fontWeight="bold" mb={1} display="block">Occasion</Text>
            <Box as="select"
              id="occasion"
              name="occasion"
              width="full"
              p={2}
              borderRadius="md"
              border="1px solid"
              borderColor={formik.errors.occasion && formik.touched.occasion ? "red.500" : "gray.200"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
               outline="none"
              _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Box>
             {formik.errors.occasion && formik.touched.occasion && (
              <Text color="red.500" fontSize="sm" mt={1}>{formik.errors.occasion}</Text>
            )}
          </Box>

          <Button 
            type="submit" 
            bg="#F4CE14" 
            width="full" 
            mt={4} 
            _hover={{ bg: "#E4BE13" }} 
            color="black"
            isLoading={isSubmitting}
            loadingText="Processing..."
          >
            Make Your reservation
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default BookingForm;
