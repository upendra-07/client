import React from "react";
import Grid from "@mui/material/Grid";
import "./WelcomePage.css";
import GetStartedButton from "../../Components/Buttons/GetStartedButton";
import ChattingWomenImg from "../../Assets/texting_women.jpg";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONST } from "../../Routes/RouteConstant";

const WelcomePage = () => {
  const navigate = useNavigate();
  const onGetStarted = () => {
    navigate(`${ROUTES_CONST.HOME}`);
  };

  return (
    <Grid className="welcome-page-main">
      <Grid className="app-bar" container md={12} xs={12} sm={12}>
        <Grid item xs={4} className="logo" sm={4} md={4}>
          AU ChatBox
        </Grid>

        <Grid item className="items" xs={1} sm={1} md={1} alignItems={"center"}>
          About
        </Grid>
        <Grid item className="items" xs={1} sm={1} md={1} alignItems={"center"}>
          Features
        </Grid>
        <Grid item className="items" xs={1} sm={1} md={1} alignItems={"center"}>
          Privacy
        </Grid>
        <Grid item className="items" xs={1} sm={1} md={1} alignItems={"center"}>
          Help Center
        </Grid>

        <Grid
          item
          className="get-start"
          xs={3}
          sm={3}
          md={3}
          align="right"
          alignItems={"center"}
        >
          <GetStartedButton label={"Get Started"} onClick={onGetStarted} />
        </Grid>
      </Grid>
      <Grid container xs={12} sm={12} md={12}>
        <Grid container xs={7} sm={7} md={7} mt={5}>
          <Grid item xs={12} pl={25} pt={10}>
            <Typography variant="p" className="app-text">
              Let's Connect <br /> with Your Friends <br /> in Real Time
              <br />
            </Typography>
            <Typography variant="h5" className="app-info">
              Great software that allows you to chat from any place <br /> at
              any time without any interruption
            </Typography>
          </Grid>
          <Grid item xs={12} pl={25}>
            <GetStartedButton
              label={"Start Chatting Now"}
              onClick={onGetStarted}
            />
          </Grid>
        </Grid>

        <Grid container xs={4} sm={4} md={4}>
          <Box position="relative">
            <img
              className="texting-img"
              src={ChattingWomenImg}
              alt="texting"
              style={{ width: "100%" }}
            />
            <Box
              position="absolute"
              top="55%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgcolor="white"
              color="black"
              padding="5px 10px"
              borderRadius="5px"
            >
              <Typography variant="p" style={{ fontWeight: "bold" }}>
                Received a message
              </Typography>
              <Typography variant="body1">
                {" "}
                Hiii.....! 😊
                <br />
                How are you?
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
