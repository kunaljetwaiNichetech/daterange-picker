import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
// import { Calendar, DateRangePicker } from "react-date-range";
import format from "date-fns/format";
export default function Datepicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setopen] = useState(true);
  // const handeitems = (e) => {
  //   console.log(format(e, "dd-mm-yyyy"));
  //   setState(format(e, "dd-mm-yyyy"));
  // };
  useEffect(() => {
    // setState(format(new Date(), "dd-mm-yyyy"));
    document.addEventListener("keydown", hideonEscape, true);
  }, []);
  const hideonEscape = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setopen(false);
    }
  };
  // const handelclickinput = () => {
  //   setopen(true);
  // };
  return (
    <div>
      <h1>this is trying </h1>
      <input
        value={`${format(state[0].startDate, "dd-MM-yyyy")} to ${format(
          state[0].endDate,
          "dd-MM-yyyy"
        )} `}
        readOnly
        onClick={() => setopen((open) => !open)}
      />
      {open && (
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          maxDate={new Date()}
          ranges={state}
          direction="horizontal"
        />
      )}
    </div>
  );
}
