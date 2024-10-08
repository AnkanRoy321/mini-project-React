import { useState } from "react";
import InfoBox from "./infobox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
            city: "Delhi",
            feelslilke: 24.84,
            temp:25.05,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            weather:"xyz"
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"centre"}} >
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}