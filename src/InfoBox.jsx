import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css"
export default function InfoBox({info}){
  let imgs="https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const hot_url="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const cold_url="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const rain_url="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
 
    return(
        <>
        <div className="infoBox">
      
      </div>
      <div className="card-container">
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?rain_url:info.temp>15?hot_url:cold_url}
            title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {info.city}&nbsp;{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                <p>Humidity :{info.humidity}</p>
                <p>Temprature{info.temp}</p>
                <p>Maximum Temprature :{info.tempMax}</p>
                <p>Minimum Temprature:{info.tempMin}</p>
                <p>the weather is feels like {info.feels_like}&deg;c and {info.weather}</p>
            </Typography>
          </CardContent>
          
        </Card>
        </div>
        </>
    )
};