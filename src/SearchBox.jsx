import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox({updateInfo}){
    
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "45210672c26dad4bb919c6b5dcc104cc";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                City: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                description: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place in the API used here.</p>}
                <br></br><br></br>
            </form>
        </div>
    )
}