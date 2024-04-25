import React, { useEffect, useState } from "react";
import "./clock3.scss";
import moment from "moment";
/* import 'moment/locale/tr'   */

const Clock3 = () => {
  const [dateTime, setDateTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(moment());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const timeStr = moment().format("HH:mm");
  const dateStr = moment().format("LL");
  const dayStr = moment().format("dddd");
  const hour = moment().format("HH");
  const minute=moment().format("mm")
  const second=moment().format("ss")

  let message = "";

  if (hour >= 6 && hour < 12) {
    message = "Morning";
  } else if (hour >= 12 && hour < 17) {
    message = "Afternoon";
  } else if (hour >= 17 && hour < 22) {
    message = "Evening";
  } else {
    message = "Night";
  }

  return (
    <div className="clock-container">
      <div className="time">{hour} <span style={{opacity: second%2===0 ? 1 :0 }}>:</span> {minute} </div>
      <div>
        <div className="date">{dateStr} </div>
        <div className="day">
          {dayStr} {message}{" "}
        </div>
      </div>
    </div>
  );
};

export default Clock3;
