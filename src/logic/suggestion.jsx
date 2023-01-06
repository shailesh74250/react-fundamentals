import { useState } from "react";

export function FindSuggestion() {
  const [arrSuggestion, setArrSuggestion] = useState([]);
  const arr = ["a", "aab", "bbcc", "aac", "abc", "bca", "cca", "ccb"];

  const handleOnChange = (event) => {
    let value = event.target.value;
    for (const item of arr) {
      item.includes(value) &&
        setArrSuggestion((prevValue) => [...prevValue, item]);
    }
    value === "" && setArrSuggestion([]);
  };
  const values = arrSuggestion.map((item, index) => (
    <span key={index}>{item}, </span>
  ));
  return (
    <>
      <input typ="text" name="suggestion" onChange={handleOnChange} />
      {values}
    </>
  );
}
