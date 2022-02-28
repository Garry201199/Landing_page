import "./styles.css";
import { makeStyles } from "@mui/styles";
import island from "../src/img/pexels-oliver-sjöström-931018.jpg";
import { CssBaseline } from "@mui/material";
import Header from "./Comp/Header";
import Places from "./Comp/Places";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${island})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white"
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Places />
    </div>
  );
}
