import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/new2.png";

import { FeatureList } from "./data";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import DownloadIcon from '@mui/icons-material/Download';
import SetMealIcon from '@mui/icons-material/SetMeal';



import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="#0a1930" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small">
          Karadiya is the best application for the fishing industry Which provide lot of 
          functionalities and unique features for doing fishing work successfully.
          </p>
        </div>
        
        </div>
      <Grid container spacing={5} direction='row' style={{paddingLeft:"100px",paddingRight:'100px'}}>
        <Grid item xs={4}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
             <AssessmentIcon sx={{ fontSize: 30 ,alignItems:'center',color:'#234a85'}}/>
        </div>

        <Typography variant="h5" component="div" sx={{fontSize: 50}}>
        Report View
        </Typography>
       
        <Typography variant="body2" sx={{paddingTop:'12px',fontSize: 12}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo ipsa beatae dolorum illo molestias tempore ipsum aliquam! Natus officia qui 
          voluptatibus necessitatibus mollitia! Nemo dolor harum eveniet doloribus voluptatum!
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
             <DownloadIcon sx={{ fontSize: 30 ,alignItems:'center',color:'#234a85'}}/>
        </div>

        <Typography variant="h5" component="div" sx={{fontSize: 50}}>
         Downloads
        </Typography>
       
        <Typography variant="body2" sx={{paddingTop:'12px',fontSize: 12}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo ipsa beatae dolorum illo molestias tempore ipsum aliquam! Natus officia qui 
          voluptatibus necessitatibus mollitia! Nemo dolor harum eveniet doloribus voluptatum!
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item  xs={4}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
             <DirectionsBoatFilledIcon sx={{ fontSize: 30 ,alignItems:'center',color:'#234a85'}}/>
        </div>

        <Typography variant="h5" component="div" sx={{fontSize: 50}}>
         Add Boart
        </Typography>
       
        <Typography variant="body2" sx={{paddingTop:'12px',fontSize: 12}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo ipsa beatae dolorum illo molestias tempore ipsum aliquam! Natus officia qui 
          voluptatibus necessitatibus mollitia! Nemo dolor harum eveniet doloribus voluptatum!
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item  xs={4}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
             <NotificationsIcon sx={{ fontSize: 30 ,alignItems:'center',color:'#234a85'}}/>
        </div>

        <Typography variant="h5" component="div" sx={{fontSize: 50}}>
        Notification
        </Typography>
       
        <Typography variant="body2" sx={{paddingTop:'12px',fontSize: 12}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo ipsa beatae dolorum illo molestias tempore ipsum aliquam! Natus officia qui 
          voluptatibus necessitatibus mollitia! Nemo dolor harum eveniet doloribus voluptatum!
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item  xs={4}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
             <DynamicFeedIcon sx={{ fontSize: 30 ,alignItems:'center',color:'#234a85'}}/>
        </div>

        <Typography variant="h5" component="div" sx={{fontSize: 50}}>
         Create Article
        </Typography>
       
        <Typography variant="body2" sx={{paddingTop:'12px',fontSize: 12}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo ipsa beatae dolorum illo molestias tempore ipsum aliquam! Natus officia qui 
          voluptatibus necessitatibus mollitia! Nemo dolor harum eveniet doloribus voluptatum!
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item  xs={4}>
        <Card sx={{ minWidth: 200 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:'center'
          }}
        >
             <SetMealIcon sx={{ fontSize: 30 ,alignItems:'center',color:'#234a85'}}/>
        </div>

        <Typography variant="h5" component="div" sx={{fontSize: 50}}>
        Fishing Details
        </Typography>
       
        <Typography variant="body2" sx={{paddingTop:'12px',fontSize: 12}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo ipsa beatae dolorum illo molestias tempore ipsum aliquam! Natus officia qui 
          voluptatibus necessitatibus mollitia! Nemo dolor harum eveniet doloribus voluptatum!
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    
        
       
      
    </section>
  );
};

export default Features;
