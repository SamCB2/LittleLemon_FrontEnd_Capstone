import React, {useReducer} from "react";
import "../Styles/Main.css";
import BookingForm from "./BookingForm";

const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, just return the same available times
        return action.availableTimes;
      default:
        return state;
    }
  };

const Main = () => {
    const updateTimes = (newDate) => {
        // In the future, update available times based on the selected date
        const newAvailableTimes = fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js");
        dispatch({ type: 'UPDATE_TIMES', availableTimes: newAvailableTimes });
    };
    const initializeTimes = () => {
        // For now, just initialize with some default times
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      };
    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
    return(
        <>
        <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        />
        </>
    );
}

export default Main;