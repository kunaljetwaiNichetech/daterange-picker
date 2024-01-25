import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";

export default function Display() {
  const history = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const value = location.state;

  const handelchangedate = () => {
    history("/", { state: value });
    console.log("working handelchange");
  };
  return (
    <div>
      Display
      <h2>
        these are seected dates
        {`${format(location.state[0].startDate, "dd-MM-yyyy")} to ${format(
          location.state[0].endDate,
          "dd-MM-yyyy"
        )} `}
      </h2>
      <button onClick={handelchangedate}>Go to change dates</button>
    </div>
  );
}
