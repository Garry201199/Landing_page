import { makeStyles } from "@mui/styles";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh"
  }
}));
export default function Places() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="place_to_visit">
      <ImageCard />
    </div>
  );
}
