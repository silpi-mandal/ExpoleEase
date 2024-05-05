import { useState } from "react";
import api from "./api.json";
const Price =({setPakage})=> {
  const[maxPrice,setMaxPrice]=useState(api[0]);
  const[minPrice,setMinPrice]=useState(api[0]);
  const[finalPrice, setfinalPrice]=useState(0);
  api.forEach((val)=>{
    //console.log(val.price);
    if (val.price > maxPrice.price) {
      setMaxPrice(val);
    } 
    if(val.price < minPrice.price)
    {
      setMinPrice(val);
    }
  })
  //console.log(finalPrice);
  // console.log(maxPrice);
  // console.log(minPrice);
  const handleChange =(e)=> {
    setfinalPrice(e.target.value);
    fetchPrice(e.target.value);
  }
  const fetchPrice =(value)=>{
    let newPrice = api.filter((val)=>{
      return value && val.price && val.price <=value
    })
    //console.log(newPrice);
    setPakage(newPrice);
  }
  return(
    <div style={{marginLeft : "30rem",marginTop:"0.5rem"}}>
    <input type="range" name="finalPrice" min={minPrice.price} max={maxPrice.price} value={finalPrice} step="1000" onChange={handleChange} />
    <label>{finalPrice}</label>
    </div>
 )
}
export default Price;