import React, { useState, useLayoutEffect, useEffect } from "react";
import "./counterdown.scss";
export default function Counterdown({
  id = 0,
  initialMinute = 0,
  initialSeconds = 0,
}) {
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem("minutes" + id)) || initialMinute
  );
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("seconds" + id)) || initialSeconds
  );

  const setSecondsValue = (val) => {
    localStorage.setItem("seconds" + id, val);
    setSeconds(parseInt(localStorage.getItem("seconds" + id)));
  };

  const setMinutesValue = (val) => {
    localStorage.setItem("minutes" + id, val);
    setMinutes(parseInt(localStorage.getItem("minutes" + id)));
  };

  const finishAlert = () => {
    alert(" You missed the last rocket to mars! ");
  };

  useLayoutEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSecondsValue(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          finishAlert();
        } else {
          setMinutesValue(minutes - 1);
          setSecondsValue(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  function reset() {
    setSecondsValue(initialSeconds);
    setMinutesValue(initialMinute);
  }

  return (
    <>
      <div className="counterdown-container">
        <h1>Counterdown to life off</h1>
        <div className="counterdown">
          <span className="number-badge ">{minutes == 0 ? 0 : minutes}</span>
          <span className="seperator">:</span>
          <span className="number-badge ">
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
        <button onClick={reset}>Reset timer</button>
      </div>
    </>
  );
}
