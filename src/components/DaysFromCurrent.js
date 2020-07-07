import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const DaysFromCurrent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [daysVal, setDaysVal] = useState(0);

  const handleDateChange = (date) => {
    var start = moment(new Date());
    var today = moment(date);

    console.log(start.diff(today, "days"), "days before today");
    setDaysVal(start.diff(today, "days"));
    setStartDate(date);
  };

  return (
    <div className="section-container dfc-container">
      <h1 className="section-title">Days Since date</h1>
      <DatePicker
        className="datep"
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        filterDate={(date) => {
          return moment().isAfter(date);
        }}
      />
      {daysVal !== 0 ? (
        <h3 className="response-container">
          <span>{startDate.toDateString()}</span> was{" "}
          <span>{daysVal} Days</span> Ago
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default DaysFromCurrent;
