import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import {useState} from "react";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        City:"Delhi",
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        humidity: 80,
        feelsLike: 36.05,
        description: "haze"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by ALOKE</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}