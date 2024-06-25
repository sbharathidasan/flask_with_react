import { useEffect, useState } from "react"
export default function App()
{const [data,setData]=useState({
  country:"",
  city:"",
  time:""
});
useEffect(()=>{
fetch("/data").then(res=>res.json())
.then(data=>{
  setData({
    time:data.time,
    city:data.city,
    country:data.Country
  })
})});
return(
<>
<h1>Flask and React</h1>
<p>name of the city is {data.city}</p>
<p>Name of the country is {data.country} </p>
<p>time in the city is {data.time}</p>
</>
)
};