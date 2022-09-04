import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "../../assets/bidding.jpg";
import Box from "@mui/material/Box";
import { Typography, Grid, Paper } from "@mui/material";
import PhishingIcon from "@mui/icons-material/Phishing";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { ProductList } from "../products";

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

      <Grid container direction="column" alignItems="center" sx={{ m: 5 }}>
        <Grid item>
          <Typography variant="h3" component="h3">
            Let's Bidding
          </Typography>
        </Grid>
        <Grid item>
          <PhishingIcon
            sx={{ fontSize: "30px", color: "#0a1930", fontWeight: 500 }}
          />
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1, ml: 18 }} alignItems="center">
        <ProductList />
      </Box>
    </>
  );
}
