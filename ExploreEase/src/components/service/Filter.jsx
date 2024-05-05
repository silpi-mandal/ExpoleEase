import { useState } from 'react';
import api from './api.json';
const Filter = ({setFilterCountry}) => {
  const[selectCountery, setSelectCountry] = useState("");
  //console.log("selectCountery",selectCountery);
  const handleChange = (e) =>{
    setSelectCountry(e.target.value);
    fetchCountry(e.target.value);
  }
  const fetchCountry = (value) =>{
  let filterRes = api.filter((val)=>{
    return value.length>0 && val.country==value
  })
  console.log("filterRes",filterRes);
  setFilterCountry(filterRes);
}
  return(
    <div style={{marginLeft: "30rem"}} >
    <select onChange={handleChange} >
      <option value="All Country">All Country</option>
    {
      api.map((val,id)=>{
        return <option key={id} value={val.country}  >{val.country}</option>
      })
    }
    </select>
    </div>
  )
}
export default Filter;