import { useState } from "react";
import "./Search.css";

const Search = ({ onInputChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    onInputChange(value);
  };
  return (
    <>
      {isVisible && (
        <input className="input" type="text" onChange={handleChange} />
      )}

      <div className="search" onClick={toggleVisibility}></div>
    </>
  );
};

export default Search;
