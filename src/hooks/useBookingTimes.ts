import { useReducer } from "react";
import { initializeTimes, updateTimes } from "../reducers/timesReducer";

export const useBookingTimes = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return { availableTimes, dispatch };
};
