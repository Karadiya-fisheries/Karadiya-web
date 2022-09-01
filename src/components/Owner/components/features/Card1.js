import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AssessmentIcon from "@mui/icons-material/Assessment";



const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
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
             <AssessmentIcon sx={{ fontSize: 30 ,alignItems:'center'}}/>
        </div>

        <Typography variant="h5" component="div" sx={{fontSize: 50}}>
         Generate Report
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
  );
}
