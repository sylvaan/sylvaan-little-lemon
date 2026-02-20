import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { describe, it, expect, vi } from "vitest";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

// Mock ChakraProvider for tests if needed, or wrap component
const renderWithChakra = (component: React.ReactNode) => {
  return render(
    <ChakraProvider value={defaultSystem}>
      {component}
    </ChakraProvider>
  );
};

describe("BookingForm", () => {
  it("renders all fields correctly", () => {
    renderWithChakra(<BookingForm />);
    
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    renderWithChakra(<BookingForm />);
    
    const submitButton = screen.getByText(/make your reservation/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    });
  });

  it("validates guest number limits", async () => {
    renderWithChakra(<BookingForm />);
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    // Test min value
    fireEvent.change(guestsInput, { target: { value: "0" } });
    fireEvent.blur(guestsInput);
    
    await waitFor(() => {
        expect(screen.getByText(/must be at least 1 guest/i)).toBeInTheDocument();
    });

    // Test max value
    fireEvent.change(guestsInput, { target: { value: "11" } });
    fireEvent.blur(guestsInput);

    await waitFor(() => {
        expect(screen.getByText(/max 10 guests/i)).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
     // Mock window.alert
     const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
     
     renderWithChakra(<BookingForm />);

     const dateInput = screen.getByLabelText(/choose date/i);
     const timeSelect = screen.getByLabelText(/choose time/i); // Note: might need specific selector for select
     const guestsInput = screen.getByLabelText(/number of guests/i);
     const occasionSelect = screen.getByLabelText(/occasion/i);
     const submitButton = screen.getByText(/make your reservation/i);

     fireEvent.change(dateInput, { target: { value: "2023-10-10" } });
     fireEvent.change(timeSelect, { target: { value: "18:00" } });
     fireEvent.change(guestsInput, { target: { value: "4" } });
     fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

     fireEvent.click(submitButton);

     await waitFor(() => {
         expect(alertMock).toHaveBeenCalled();
     });
     
     alertMock.mockRestore();
  });
});
