import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Quicksand"
  },
  title: {
    fontSize: "1.5rem",
    flexGrow: 1
  },

  toolbar: {
    width: "80%",
    margin: "auto"
  },
  myisland: {
    color: "#B5FE83"
  },
  icon: {
    color: "#fefefe"
  },
  colortext: {
    color: "#B5FE83"
  },
  btite: {
    fontSize: "4rem"
  },
  container: {
    alignItems: "center",
    textAlign: "center"
  }
}));
const Header = () => {
  const classes = useStyles();
  const [yes, setYes] = useState(false);

  useEffect(() => {
    setYes(true);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar sx={{ background: "none" }} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <h1 className={classes.title}>
            My<span className={classes.myisland}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon htmlColor="#fefefe" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={yes} {...(yes ? { timeout: 1000 } : {})}>
        <div className={classes.container}>
          <h1 className={classes.btite}>
            Welcome To
            <br />
            <span className={classes.colortext}>My Island</span>
          </h1>
          <br />
          <Scroll to="place_to_visit" smooth={true}>
            <IconButton>
              <ArrowBackIosOutlinedIcon
                sx={{
                  fontSize: 50,
                  color: "#fff",
                  transform: "rotate(270deg)"
                }}
              />
            </IconButton>{" "}
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
