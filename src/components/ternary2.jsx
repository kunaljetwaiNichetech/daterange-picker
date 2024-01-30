import { useEffect, useRef, useState } from "react";
import React from "react";

export default function Ternary2() {
  let data = {
    name: "",
    last: "",
    email: "",
    mobile: "",
  };
  const user = {
    profile: {
      name: "John Doe",
      age: 30,
      address: {
        city: "New York",
        country: "USA",
        postalCode: 1000,
      },
    },
  };

  // Safe access to deeply nested properties using optional chaining and nullish coalescing
  const city = user?.profile?.address?.city ?? "Default City";
  console.log(city); // Output: New York

  // If any of the nested properties are null or undefined, the default value will be used
  const postalCode = user?.profile?.address?.postalCode ?? "00000";
  console.log(postalCode); // Output: 00000
  //   if (data.name && data.last) {
  //     console.log(data.name ,data.last);
  //   } else {
  //     console.log("the name and last name is required");
  //   }
  //   let score = prompt("enter the marks");
  //   let grade =
  //     score < 50
  //       ? "F"
  //       : score < 70
  //       ? "D"
  //       : score <= 89
  //       ? "C"
  //       : score < 90
  //       ? "B"
  //       : "A";
  //   console.log(grade);
  let [Result, setResult] = useState("");
  let ref = useRef(null);
  const [error, seterror] = useState({
    phone: "",
  });
  let score = 50;
  useEffect(() => {
    ref.current.focus();
  }, []);
  const handelchange = (e) => {
    const regs = /^[0-9]$|^[1-9][0-9]$|^(100)*$/;
    if (regs.test(e.target.value)) {
      setResult(e.target.value);
      seterror("");
    } else {
      seterror({ phone: "only numbers are allowed" });
    }
  };
  return (
    <div>
      <h1>{Result}</h1>
      <div>
        <label htmlFor="result">Enter your marks</label>
        <br />
        <input
          type="text"
          name="result"
          onChange={handelchange}
          maxLength={3}
          value={Result}
          // autoFocus
          ref={ref}
        />
      </div>
      {error.phone && <span>{error.phone}</span>}
      {/* <h1>ternary2</h1>
      {data.name
        ? data.name + data.last
        : data.email || data.mobile
        ? data.mobile || data.email
        : "Details are required name and last name"}
      <br /> */}

      {/* {data.name ? data.name : data.last ?? "the value is undefine or null"} */}
      <h2>the result is </h2>
      {Result == ""
        ? ""
        : Result > 100
        ? "marks cant be more than 100"
        : Result <= 0
        ? "invalid input"
        : Result <= 50
        ? "F"
        : Result <= 70
        ? "D"
        : Result <= 80
        ? "c"
        : Result <= 90
        ? "B"
        : "A"}
    </div>
  );
}
