import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box,ButtonBase,Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1,ml:5,marginRight:5,paddingBottom:"15px"}} alignItems="center">
      <Grid container spacing={3}>
        <Grid item xs>
          
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        border:2,
        
        borderColor:"#234a85"
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/card/fish1.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="h2" sx={{fontSize:20}}>
                Weather Alerts
              </Typography>
              <Typography variant="body2" gutterBottom sx={{fontSize:12,fontFamily:'serif'}}>
              Severe Weather Warnings · Weather Map. CLIMATE ... Marine weather forecast for sea areas around the island · Sea Area around Sri Lanka
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
          {/* </Item> */}
        </Grid>
        <Grid item xs>
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        border:2,
        
        borderColor:"#234a85"
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/card/im1.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="h2" sx={{fontSize:20}}>
                Weather Alerts
              </Typography>
              <Typography variant="body2" gutterBottom sx={{fontSize:12,fontFamily:'serif'}}>
              Severe Weather Warnings · Weather Map. CLIMATE ... Marine weather forecast for sea areas around the island · Sea Area around Sri Lanka
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
        </Grid>
        <Grid item xs>
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        border:2,
        
        borderColor:"#234a85"
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/card/im7.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="h2" sx={{fontSize:20}}>
                Weather Alerts
              </Typography>
              <Typography variant="body2" gutterBottom sx={{fontSize:12,fontFamily:'serif'}}>
              Severe Weather Warnings · Weather Map. CLIMATE ... Marine weather forecast for sea areas around the island · Sea Area around Sri Lanka
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
        </Grid>
        {/* <Grid item xs>
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
        </Grid> */}
      </Grid>
    </Box>
  );
}
