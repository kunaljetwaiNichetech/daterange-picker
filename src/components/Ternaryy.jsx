import React from "react";

export default function Ternaryy() {
  let data = {
    firstName: "",
    LastName: "jetwani",
    Email: "",
    mobile: "",
  };

  return (
    <div>
      {/* <h1>Ternaryy</h1>
      <h2>firstName</h2>
      {data.firstName? data.firstName: "say there is no firstname"}
      {data.firstName}
      {`${data.firstName}, ${data.LastName}`}
      <br />
      <h2>lastName</h2>
      {data.LastName ? data.LastName : "say there is no LastName"}
      {data.LastName}
      <br />
      <h2>Email</h2>
      {data.Email ? data.Email : "say there is no Email"}
      {data.Email}
      <br />
      <h2>Mobile</h2>
      {data.mobile ? data.mobile : "say there is no mobile"}
      {data.mobile}
      <br /> */}
      <h1>results</h1>
      {/* {data.firstName ? data.firstName : data.LastName  ? data.LastName : "thers is no name"}<br/> */}
      {data.firstName ? data.firstName: data.LastName? data.LastName: data.Email? data.Email: "there is no f l and  email"}
      <br />
      <hr></hr>
      {data.firstName?data.firstName:"there is no firstname"}
      {/* {data.firstName ? data.LastName ?data.Email ? data.mobile ?"":"there is no mobile":"there is no email":"there is no last name":"there is no data"} */}
    </div>
  );
}
