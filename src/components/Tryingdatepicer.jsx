import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
export default function Tryingdatepicer() {
  let [items, setitems] = useState();
  const [open, setopen] = useState(false);
  const handeitems = (e) => {
    console.log(format(e, "dd-mm-yyyy"));
    setitems(format(e, "dd-mm-yyyy"));
  };
  useEffect(() => {
    setitems(format(new Date(), "dd-mm-yyyy"));
    document.addEventListener("keydown", hideonEscape, true);
  }, []);
  const hideonEscape = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setopen(false);
    }
  };
  const handelclickinput = () => {
    setopen(true);
  };
  return (
    <div>
      <h1>this is trying </h1>
      <input value={items} onClick={handelclickinput} />
      {open && <Calendar onChange={handeitems} />}
    </div>
  );
}
