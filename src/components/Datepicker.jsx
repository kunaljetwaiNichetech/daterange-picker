import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays, set } from "date-fns";
import { useRef } from "react";
import { useState } from "react";
// import { Calendar, DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { useLocation, useNavigate } from "react-router-dom";
export default function Datepicker() {
  const loc = useLocation();
  console.log(loc);

  let g = JSON.parse(localStorage.getItem("itemss"));

  const history = useNavigate();
  const refone = useRef(null);
  const [state, setState] = useState([
    {
      startDate: g ? g[0]?.startDate : null,
      endDate:g ? g[0]?.endDate : null,
      // endDate: addDays(new Date(), 5),
      key: "selection",
    },
  ]);

  const [restttt, setrestttt] = useState(true);
  const [open, setopen] = useState(false);
  const handelstateofdate = (item) => {
    if (setState([item.selection])) {
      console.log("data is set in end date");
      setopen(false);
    }
    console.log("itttttttteeeemmm", item);
    setopen(false);
    console.log("item", item.selection.endDate);
  };
  ////////////////////// clicking outside
  const handelclose = () => {
    // setopen(false);
    setState([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
    // localStorage.setItem(
    //   "itemss",
    //   JSON.stringify([
    //     {
    //       startDate: null,
    //       endDate: null,
    //       key: "selection",
    //     },
    //   ])
    // );
  };
  useEffect(() => {
    debugger;
    // let g = JSON.parse(localStorage.getItem("itemss"));
    // console.log("gggggg", g);
    // setState([
    //   {
    //     startDate: g ? g[0]?.startDate : null,
    //     endDate: g ? g[0]?.endDate : null,
    //     key: "selection",
    //   },
    // ]);
    localStorage.clear();
    // setState(g);
  }, []);
  useEffect(() => {
    // setState(format(new Date(), "dd-mm-yyyy"));
    document.addEventListener("keydown", hideonEscape, true);
    document.addEventListener("click", hideonclickoutside, true);
  }, []);

  const hideonEscape = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setopen(false);
    }
  };
  const hideonclickoutside = (e) => {
    console.log("refonecurrent", refone.current);
    console.log("this is ", e.target);
    if (refone.current && !refone.current.contains(e.target)) {
      setopen(false);
    }
  };

  ////////////////////////////end clicking outside

  const handelgoing = () => {
    console.log("this is goooo");
    history("/d", { state: state });
  };
  // const handelconfirmdates = () => {
  //   if (state[0].endDate === null) {
  //     console.log("this i sstate for cheackings", state[0].endDate);
  //     console.log("thid id null vlues ");
  //   } else {
  //     history("/display", { state: state });
  //     // return <h1>please select date </h1>;
  //   }
  // };

  return (
    <div>
      <h1>this is trying </h1>
      <h1>select Date </h1>
      <input
        value={
          state[0].startDate === null
            ? "check inn date"
            : ` ${format(state[0]?.startDate, "dd-MM-yyyy")}`
        }
        readOnly
        onClick={() => setopen((open) => !open)}
      />
      <br />
      {/* this is for second input for end date */}
      {/* {handelconfirmdates} */}
      <input
        value={
          state[0].endDate === null
            ? "cheout date"
            : ` ${format(state[0]?.endDate, "dd-MM-yyyy")}`
          // ? setopen(false)
          // : ""
        }
        readOnly
        onClick={() => setopen((open) => !open)}
      />
      {/* end of second input  */}
      <button onClick={handelgoing}>goooo</button>
      <br />
      <button onClick={handelclose}>Reset</button>&nbsp;
      {/* <button onClick={handelconfirmdates}>Confirm Date</button> */}
      <div ref={refone}>
        {open && (
          <DateRangePicker
            onChange={handelstateofdate}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            minDate={new Date()}
            ranges={state}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
}
