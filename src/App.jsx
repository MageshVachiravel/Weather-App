import { useState } from "react"
import axios from "axios";

const App = () =>{

  const [input,setInput] = useState("");
  const [weather,setWeather] = useState("");
  const [temp,setTemp] = useState("");
  const [desc,setDesc] = useState("");

  const handleInput = (e)=>{
    setInput(e.target.value);
  }

  const getData = ()=>{
      const api = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7a390fa2de2d59254baf2afc8058de1f`);
      api.then((data)=>{
        console.log(data.data)
        setWeather(data.data.weather[0].main);
        setDesc(data.data.weather[0].description);
        setTemp(data.data.main.temp);
       
      }).catch((err)=>{
        console.log(err)
      })

      setInput("")
  }


  return (
    <div className="bg-black p-16">
      <div className="bg-green-500 p-10 rounded">
        <h1 className="text-2xl font-semibold">Weather Report</h1>
        <p>I can give you a weather report about your city !</p>
        <input onChange={handleInput} value={input} type="text" placeholder="Enter your City Name" className="mt-3 px-2 py-1 rounded block outline-none" />
        <button onClick={getData} className="bg-black text-white px-2 py-1 rounded my-3">Get Report</button>
        <p className="font-bold text-md">Weather : {weather}</p>
        <p className="font-bold text-md">Temperature : {temp}</p>
        <p className="font-bold text-md">Description : {desc}</p>
      </div>
    </div>
  )
}

export default App