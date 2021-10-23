import React from "react";
import "./form.css";
import axios from "axios";

export default function EnterNamePhone(props) {
  const {
    name,
    phone,
    provinceName,
    city,
    message,
    handleSetStep,
    handleSetName,
    handleSetPhone,
    handleSetProvinceName,
    handleSetCity,
    handleSetMessage
  } = props;

  const backHandler = () => {
    handleSetStep(1);
    handleSetProvinceName("");
    handleSetCity("");
  };

  const sendHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        provinceName: provinceName,
        city: city,
        name: name,
        phone: phone
      })
      .then((response) => {
        console.log(response.data);
        handleSetMessage("User Registration Successful.")
      })
      .catch((error) => {
        handleSetMessage("ERROR! ", error)
      });
  };

  return (
    <>
      <div>
        <input
          className="input"
          type="text"
          value={name}
          placeholder="نام خود را وارد کنید"
          dir="rtl"
          onChange={(e) => handleSetName(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          className="input"
          type="text"
          value={phone}
          placeholder="09111111111"
          onChange={(e) => handleSetPhone(e.target.value)}
        ></input>
      </div>
      <button className="button" onClick={backHandler}>
        قبلی
      </button>
      <button className="button" onClick={sendHandler}>
        ارسال
      </button>
      <br />
      <br />
      {message ? <div style={{color:"green"}}>{message}</div> : ""}
    </>
  );
}
