import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const DaysToCurrent = () => {
  const [futureDate, setFutureDate] = useState(new Date());
  const [daysVal, setDaysVal] = useState(0);

  const handleDateChange = (date) => {
    var today = moment(new Date());
    var future = moment(date);

    setDaysVal(future.diff(today, "days") + 1);
    setFutureDate(date);
  };

  return (
    <div className="section-container dtc-container">
      <h1 className="section-title">Days From Today</h1>
      <DatePicker
        className="datep"
        selected={futureDate}
        onChange={(date) => handleDateChange(date)}
        filterDate={(date) => {
          return moment().isBefore(date);
        }}
      />

      {daysVal !== 0 ? (
        <h3 className="response-container">
          {/* {formatResponseString()} */}
          <span>{futureDate.toDateString()}</span> Is{" "}
          <span>{daysVal} Days</span> In The Future
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default DaysToCurrent;
