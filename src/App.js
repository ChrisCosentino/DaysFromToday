import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

import DaysToCurrent from "./components/DaysToCurrent";
import DaysFromCurrent from "./components/DaysFromCurrent";
// import DaysBetweenDates from "./DaysBetweenDates";

const App = () => {
  return (
    <div>
      <h1 className="title">Days From Today</h1>
      <span className="subtitle">
        A simple way to check the amount of days from, or, to a certain date.
        Just press on a date to get started!{" "}
      </span>{" "}
      <br />
      <div className="container">
        <DaysToCurrent />
        <DaysFromCurrent />
      </div>
      <footer>
        <h5>
          Created by <a href="https://devsent.com/">Devsent ltd.</a> | author:
          Chris Cosentino{" "}
        </h5>
      </footer>
    </div>
  );
};

export default App;
