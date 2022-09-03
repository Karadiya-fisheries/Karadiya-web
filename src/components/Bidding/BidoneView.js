import React from 'react';
import Navbar from '../navbar/Navbar';
import { Typography, Grid,Paper,Box} from "@mui/material";
//import Paper from '@mui/material/Paper';
import Image from '../../assets/bid.jpg'

export default function BidoneView() {
  return (
    <>
    <Navbar/>
    <Grid container direction="row"spacing={2}>
  <Grid item xs={6} md={6} sx={{m:5}}>
   <Box elevation={3} sx={{width:"600px",height:"400px",backgroundImage: `url(${Image})`,backgroundSize: "cover"}}>bjjbhn</Box>
  </Grid>
  <Grid item xs={6} md={5}>
    <Box elevation={3} sx={{border:1,marginTop:'50px',marginLeft:'0'}}>
    <Typography
            variant="h3"
            component="h3"
            
          >
            Salmon Fish
          </Typography>
    </Box>
  
  
  </Grid>
  </Grid>
    </>
  )
}
