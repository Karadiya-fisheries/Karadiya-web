import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "../../assets/bidding.jpg";
import Box from "@mui/material/Box";
import { Typography, Grid,Paper} from "@mui/material";
import PhishingIcon from "@mui/icons-material/Phishing";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import {Link} from 'react-router-dom';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

export default function Bidding() {
  return (
    <>
      <Navbar />
      <Box
        class="candles"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          height: "70vh",
          color: "#f5f5f5",
        }}
      />

      <Grid container direction="column" alignItems="center" sx={{m:5}}>
        
        <Grid item>
          <Typography
            variant="h3"
            component="h3"
            
          >
            Let's Bidding
          </Typography>
        </Grid>
        <Grid item>
          <PhishingIcon sx={{fontSize:'30px',color:'#0a1930',fontWeight:500}} />
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1,ml:18 }} alignItems="center">
      <Grid container spacing={3}>
        <Grid item xs>
          
          <Card sx={{ maxWidth: 210 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/card/img2.jpg"
      />
      <CardContent>
      <Grid container direction="row"  spacing={8}>
      <Grid item alignItems="center"  >
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',display:"flex", 
        alignItems:"center",
        justifyContent:"center"}}>
          Lizard
        </Typography>
        </Grid>
        <Grid item>
     
        </Grid>
        </Grid>
        
        <Typography variant="body2" color="text.secondary"sx={{fontSize:'13px'}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          
        </Typography>
        <Grid container direction="row" alignItems="right" spacing={8}>
      <Grid item>
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',color:'#0a1930'}}>
          Current Bid : Rs.650.00
        </Typography>
        </Grid>
        
        </Grid>
      </CardContent>
      <Box textAlign='center'>
        <Link to='/onebid'>
      <Button variant="contained" sx={{fontSize:"12px",bgcolor:"#0a1930",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              color:'#0a1930'}}} startIcon={<StarIcon />}>
       Bid Now
      </Button>
      </Link>
      </Box>
    </Card>
          {/* </Item> */}
        </Grid>
        <Grid item xs>
        <Card sx={{ maxWidth: 210 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/card/img2.jpg"
      />
      <CardContent>
      <Grid container direction="row"  spacing={8}>
      <Grid item alignItems="center"  >
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',display:"flex", 
        alignItems:"center",
        justifyContent:"center"}}>
          Lizard
        </Typography>
        </Grid>
        <Grid item>
     
        </Grid>
        </Grid>
        
        <Typography variant="body2" color="text.secondary"sx={{fontSize:'13px'}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          
        </Typography>
        <Grid container direction="row" alignItems="right" spacing={8}>
      <Grid item>
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',color:'#0a1930'}}>
          Current Bid : Rs.650.00
        </Typography>
        </Grid>
        
        </Grid>
      </CardContent>
      <Box textAlign='center'>
      <Button variant="contained" sx={{fontSize:"12px",bgcolor:"#0a1930",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              color:'#0a1930'}}} startIcon={<StarIcon />}>
       Bid Now
      </Button>
      </Box>
    </Card>
        </Grid>
        <Grid item xs>
        <Card sx={{ maxWidth: 210 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/card/img2.jpg"
      />
      <CardContent>
      <Grid container direction="row"  spacing={8}>
      <Grid item alignItems="center"  >
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',display:"flex", 
        alignItems:"center",
        justifyContent:"center"}}>
          Lizard
        </Typography>
        </Grid>
        <Grid item>
     
        </Grid>
        </Grid>
        
        <Typography variant="body2" color="text.secondary"sx={{fontSize:'13px'}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          
        </Typography>
        <Grid container direction="row" alignItems="right" spacing={8}>
      <Grid item>
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',color:'#0a1930'}}>
          Current Bid : Rs.650.00
        </Typography>
        </Grid>
        
        </Grid>
      </CardContent>
      <Box textAlign='center'>
      <Button variant="contained" sx={{fontSize:"12px",bgcolor:"#0a1930",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              color:'#0a1930'}}} startIcon={<StarIcon />}>
       Bid Now
      </Button>
      </Box>
    </Card>
        </Grid>
        <Grid item xs>
        <Card sx={{ maxWidth: 210 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/card/img2.jpg"
      />
      <CardContent>
      <Grid container direction="row"  spacing={8}>
      <Grid item alignItems="center"  >
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',display:"flex", 
        alignItems:"center",
        justifyContent:"center"}}>
          Lizard
        </Typography>
        </Grid>
        <Grid item>
     
        </Grid>
        </Grid>
        
        <Typography variant="body2" color="text.secondary"sx={{fontSize:'13px'}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          
        </Typography>
        <Grid container direction="row" alignItems="right" spacing={8}>
      <Grid item>
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold',color:'#0a1930'}}>
          Current Bid : Rs.650.00
        </Typography>
        </Grid>
        
        </Grid>
      </CardContent>
      <Box textAlign='center'>
      <Button variant="contained" sx={{fontSize:"12px",bgcolor:"#0a1930",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              color:'#0a1930'}}} startIcon={<StarIcon />}>
       Bid Now
      </Button>
      </Box>
    </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
