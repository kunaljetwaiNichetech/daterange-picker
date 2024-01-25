import React, { useEffect } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";

export default function Display2() {
  const location = useLocation();
  const value = location.state;
  localStorage.setItem("itemss", JSON.stringify(value));
  const his = useNavigate();

  console.log(location.state);

  const handelgohome = () => {
    his("/");
    // location.state = [] && his("/", { state: location.state });
  };
  return (
    <div>
      <h1>Display2</h1>

      <button onClick={handelgohome}>go to home</button>
    </div>
  );
}
