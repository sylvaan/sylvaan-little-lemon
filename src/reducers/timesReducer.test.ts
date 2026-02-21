import { describe, it, expect, vi } from "vitest";
import { initializeTimes, updateTimes } from "./timesReducer";

describe("timesReducer", () => {
  it("initializeTimes should return a non-empty array of available times", () => {
    // Mock the global fetchAPI for testing initialization
    const mockTimes = ["17:00", "18:00", "19:00"];
    window.fetchAPI = vi.fn(() => mockTimes);

    const times = initializeTimes();

    // Assertions
    expect(times).toBeDefined();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    expect(times).toEqual(mockTimes);
    expect(window.fetchAPI).toHaveBeenCalled();
  });

  it("initializeTimes should return default times if fetchAPI fails/is unavailable", () => {
    // Override fetchAPI to simulate it not being loaded
    // @ts-ignore
    window.fetchAPI = undefined;

    const times = initializeTimes();

    // Fallback assertions
    expect(times).toBeDefined();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain("17:00");
  });

  it("updateTimes should return the same value provided in the state if no API is available", () => {
    // @ts-ignore
    window.fetchAPI = undefined;
    const initialState = ["17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", payload: "2023-10-15" };

    const newState = updateTimes(initialState, action);

    // Should return original state without API
    expect(newState).toEqual(initialState);
  });

  it("updateTimes should return new times from fetchAPI based on the dispatched date", () => {
    const mockNewTimes = ["20:00", "21:00"];
    window.fetchAPI = vi.fn().mockReturnValue(mockNewTimes);

    const initialState = ["17:00", "18:00"];
    const actionDate = "2024-12-25";
    const action = { type: "UPDATE_TIMES", payload: actionDate };

    const newState = updateTimes(initialState, action);

    // Assertions
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date(actionDate));
    expect(newState).toEqual(mockNewTimes);
  });
});
