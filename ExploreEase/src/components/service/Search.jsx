import { useState } from "react";
import "../Style/Search.css";
import api from "./api.json";
const Search = ({ setNewPlace }) => {
  const [input, setInput] = useState("");
  //console.log("input", input);
  const handleChange = (e) => {
    setInput(e.target.value);
    fetchData(e.target.value)
  };
  const fetchData=(value)=>{
  let result = api.filter((place) => {
    return (
      value && place && place.name && place.name.toLowerCase().includes(value)
    );
  });
  //console.log("result", result);
  setNewPlace(result);
}
  return (
    <div className="input-wrapper">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};
export default Search;
