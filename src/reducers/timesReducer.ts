// Define the global window object to include the Meta API functions
declare global {
  interface Window {
    fetchAPI: (date: Date) => string[];
    submitAPI: (formData: any) => boolean;
  }
}

export const initializeTimes = () => {
  // Try to use the API if available
  if (typeof window !== "undefined" && typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date());
  }
  // Fallback
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (
  state: string[],
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      if (
        typeof window !== "undefined" &&
        typeof window.fetchAPI === "function"
      ) {
        return window.fetchAPI(new Date(action.payload));
      }
      return state;
    default:
      return state;
  }
};
