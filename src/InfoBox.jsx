import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    const HOT_URL = "https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
    const COLD_URL = "https://www.rescusaveslives.com/wp-content/uploads/2021/12/shutterstock_121116895.jpg";
    const RAINY_URL = "https://www.tripsavvy.com/thmb/RYPiRVziR_3-6a-hOFy1nFuPR5s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/travel-monsoon-season-asia-84fd2f7efbe34842b25e007760090f6f.jpg";

    return (
    <div className='infoBox'>
    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}{" "}{info.humidity > 80 ? (<ThunderstormIcon/>) : info.temp > 20 ? (<WbSunnyIcon/>) : (<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Feels Like = {info.feelsLike}&deg;C</p>
          <p>The weather feels like <i>{info.description}</i>.</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}