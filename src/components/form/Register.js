import React, { useState } from "react";
import SelectProvinceCity from "./SelectProvinceCity";
import EnterNamePhone from "./EnterNamePhone.js.js";
import ShowInfoForm from "./ShowInfoForm";

function Register() {
  const [step, setStep] = useState(1);
  const [province, setProvince] = useState(0);
  const [provinceName, setProvinceName] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const handleSetStep = (step) => {
    setStep(step);
  };
  const handleSetProvince = (province) => {
    setProvince(province);
  };
  const handleSetProvinceName = (provinceName) => {
    setProvinceName(provinceName);
  };
  const handleSetCities = (cities) => {
    setCities(cities);
  };
  const handleSetCity = (city) => {
    setCity(city);
  };
  const handleSetName = (name) => {
    setName(name);
  };
  const handleSetPhone = (phone) => {
    setPhone(phone);
  };
  const handleSetMessage = (message) => {
    setMessage(message);
  };

  const checkStep = () => {
    switch (step) {
      case 1:
        return (
          <SelectProvinceCity
            province={province}
            cities={cities}
            handleSetStep={handleSetStep}
            handleSetProvince={handleSetProvince}
            handleSetProvinceName={handleSetProvinceName}
            handleSetCities={handleSetCities}
            handleSetCity={handleSetCity}
          />
        );
      case 2:
        return (
          <EnterNamePhone
            name={name}
            phone={phone}
            provinceName={provinceName}
            city={city}
            message={message}
            handleSetStep={handleSetStep}
            handleSetName={handleSetName}
            handleSetPhone={handleSetPhone}
            handleSetProvinceName={handleSetProvinceName}
            handleSetCity={handleSetCity}
            handleSetMessage={handleSetMessage}
          />
        );
      default:
        return (
          <SelectProvinceCity
            province={province}
            cities={cities}
            handleSetStep={handleSetStep}
            handleSetProvince={handleSetProvince}
            handleSetProvinceName={handleSetProvinceName}
            handleSetCities={handleSetCities}
            handleSetCity={handleSetCity}
          />
        );
    }
  };

  return (
    <div>
      {checkStep()}
      <br />
      <br />
      <br />
      <ShowInfoForm
        provinceName={provinceName}
        city={city}
        name={name}
        phone={phone}
      />
    </div>
  );
}

export default Register;
