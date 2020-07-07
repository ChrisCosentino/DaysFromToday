import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const DaysBetweenDates = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [chosen, setChosen] = useState(0); //If 1 only one was chosen, if 2 both

  const handleStartDateChange = (date) => {
    if (chosen === 2) {
      setChosen(1);
    }

    setChosen(chosen + 1);
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setChosen(chosen + 1);
    setEndDate(date);
  };

  useEffect(() => {
    console.log("printed");
  }, [chosen === 2]);

  return (
    <div className="container dbc-container">
      <h1>Days Between Dates</h1>

      <DatePicker
        className="datep"
        selected={startDate}
        onChange={(date) => handleStartDateChange(date)}
      />
      <DatePicker
        className="datep"
        selected={endDate}
        onChange={(date) => handleEndDateChange(date)}
      />

      {chosen == 2 ? <div>Hi</div> : ""}
    </div>
  );
};

export default DaysBetweenDates;
