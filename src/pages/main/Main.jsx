import React, { useState } from "react";
import Content from "../../containers/content/Content";
import Header from "../../containers/header/Header";
import Navigation from "../../containers/navigation/Navigation";
import "./Main.css";

const Main = ({ value }) => {
  const [valueFromInput, setValueFromInput] = useState("");
  const handleInputChange = (value) => {
    setValueFromInput(value);
  };

  return (
    <>
      <Header onInputChange={handleInputChange} />
      <Navigation />
      <Content value={value} inputValue={valueFromInput} />
    </>
  );
};
export default Main;
