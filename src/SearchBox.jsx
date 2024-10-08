import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [error,setError]=useState(false);


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0fccb1d220e0832f84d45a35625759f3";

    let getWeatherInfo = async () =>{

        try{

        let responce=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce=await responce.json();
        console.log(jsonResponce);
        let result={
            city: city,
            temp: jsonResponce.main.temp,
            tempMin: jsonResponce.main.temp_min,
            tempMax: jsonResponce.main.temp_max,
            humidity: jsonResponce.main.humidity,
            feelsLike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err) {
            throw err;
        }
    }



    let handleChange=  (evt)=>{
        setcity(evt.target.value)
    }

    let handleSubmit= async (evt)=>{
        try {
            evt.preventDefault();
            setError(false); // Reset error before making a new request
            console.log(city)
            setcity("")
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }

    return(
        <div className="SearchBox">
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                required 
                value={city}
                onChange={handleChange}
                />
                <br /><br />
                
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such Place exists!</p>}
            </form>
        </div>
    );

}