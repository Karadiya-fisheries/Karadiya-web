import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/new2.png";

import { FeatureList } from "./data";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import DownloadIcon from "@mui/icons-material/Download";
import SetMealIcon from "@mui/icons-material/SetMeal";

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
            Karadiya is the best application for the fishing industry Which
            provide lot of functionalities and unique features for doing fishing
            work successfully.
          </p>
        </div>
      </div>
      <Grid
        container
        spacing={5}
        direction="row"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
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
                  justifyContent: "center",
                }}
              >
                <AssessmentIcon
                  sx={{ fontSize: 30, alignItems: "center", color: "#234a85" }}
                />
              </div>

              <Typography variant="h5" component="div" sx={{ fontSize: 25 }}>
                Report View
              </Typography>

              <Typography
                variant="body2"
                sx={{ paddingTop: "12px", fontSize: 12 }}
              >
                Owners can take a look at their fish harvest details and get
                daily updates and make the decisions through the reports.Boat
                owner has the fully control over viewing the harvest details and
                no one else wont be able access the reports. Also owners can
                download the daily catch records as pdf files.
                <br />
              </Typography>
            </CardContent>
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
                  justifyContent: "center",
                }}
              >
                <DownloadIcon
                  sx={{ fontSize: 30, alignItems: "center", color: "#234a85" }}
                />
              </div>

              <Typography variant="h5" component="div" sx={{ fontSize: 25 }}>
                Auction
              </Typography>

              <Typography
                variant="body2"
                sx={{ paddingTop: "12px", fontSize: 12 }}
              >
                As a good facility owners can generate an auction with the fish
                harvest from the fishing trips. Owner can create bids by adding
                images,Unit prices,Lot size. This will enable owners to have more demand for their harvest
                <br />
              </Typography>
            </CardContent>
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
                  justifyContent: "center",
                }}
              >
                <DirectionsBoatFilledIcon
                  sx={{ fontSize: 30, alignItems: "center", color: "#234a85" }}
                />
              </div>

              <Typography variant="h5" component="div" sx={{ fontSize: 25 }}>
                Add Boart
              </Typography>

              <Typography
                variant="body2"
                sx={{ paddingTop: "12px", fontSize: 12 }}
              >
                Boat owners can add more and more vessels rather than one. This
                facility will be benificial to all the boat owne who are having
                more than one single vessel.
                <br />
              </Typography>
            </CardContent>
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
                  justifyContent: "center",
                }}
              >
                <NotificationsIcon
                  sx={{ fontSize: 30, alignItems: "center", color: "#234a85" }}
                />
              </div>

              <Typography variant="h5" component="div" sx={{ fontSize: 25 }}>
                Notification
              </Typography>

              <Typography
                variant="body2"
                sx={{ paddingTop: "12px", fontSize: 12 }}
              >
                Owner get an E-mail notification when the fishermen fillout and
                submit a fish catch record via the E-logbook or when the
                submitted departure apprroval request got the approval from the
                fishery officer.
                <br />
              </Typography>
            </CardContent>
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
                  justifyContent: "center",
                }}
              >
                <DynamicFeedIcon
                  sx={{ fontSize: 30, alignItems: "center", color: "#234a85" }}
                />
              </div>

              <Typography variant="h5" component="div" sx={{ fontSize: 25 }}>
                Create Article
              </Typography>

              <Typography
                variant="body2"
                sx={{ paddingTop: "12px", fontSize: 12 }}
              >
                Owner can create article or notices with including images and
                also he can view the latest notices and get updated.
                <br />
              </Typography>
            </CardContent>
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
                  justifyContent: "center",
                }}
              >
                <SetMealIcon
                  sx={{ fontSize: 30, alignItems: "center", color: "#234a85" }}
                />
              </div>

              <Typography variant="h5" component="div" sx={{ fontSize: 25 }}>
                Real time Chat System
              </Typography>

              <Typography
                variant="body2"
                sx={{ paddingTop: "12px", fontSize: 12 }}
              >
                Owner can have a real time chat facility with the buyers of the
                auction and it will ease the process of bidding by the travel
                issues and also reduce the time wasting.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Features;
