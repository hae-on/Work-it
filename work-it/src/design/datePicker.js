import React, { useState } from "react";
import { getYear, getMonth } from "date-fns";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);
const _ = require("lodash");

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default Calendar;
