import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox ({info}) {
    // const INIT_URL="https://plus.unsplash.com/premium_photo-1664004040258-0516bfeb8fa9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";


    

    return (
        <div className="InfoBox">
            {/* <h3>Weather Info - {info.weather}</h3> */}
            <div className="cardContainer"/>
            <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80 && info.temp>15
            ? RAIN_URL
            : info.temp>15
            ? HOT_URL
            :COLD_URL
            // info.temp>15
            // ?HOT_URL 
            // :info.temp<15
            // ? COLD_URL
            // :RAIN_URL
        }
        title="green iguana"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
            info.humidity>80 && info.temp>15
            ? <ThunderstormIcon/>
            : info.temp>15
            ? <WbSunnyIcon/>
            :<AcUnitIcon/>
            // info.temp>15
            // ?<WbSunnyIcon/> 
            // :info.temp<15
            // ? <AcUnitIcon/>
            // :<ThunderstormIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>humidity = {info.humidity}</p>
            <p>Min Temperature = {info.tempMin}&deg;C</p>
            <p>Max Temperature = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

            

        </Typography>
    </CardContent>
    
    </Card>
        </div>
    );
}