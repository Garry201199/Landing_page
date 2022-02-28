import {
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Stack,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import island1 from "../img/pexels-quang-nguyen-vinh-2649394.jpg";
import island2 from "../img/pexels-oliver-sjöström-1316897.jpg";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "645px",
    justifyContent: "center",
    margin: "20px"
  },
  media: { height: "400px" },
  title: {
    color: "#fff"
  }
}));
export default function ImageCard() {
  const classes = useStyles();
  const [yes, setYes] = useState(false);

  useEffect(() => {
    setYes(true);
  }, []);
  return (
    <Collapse in={yes} {...(yes ? { timeout: 1000 } : {})}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Stack spacing={3} direction="row">
          <Card className={classes.root} sx={{ background: "rgba(0,0,0,0.5)" }}>
            <CardMedia
              className={classes.media}
              component="img"
              height="140"
              image={island1}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                className={classes.title}
                sx={{ fontFamily: "Quicksand", fontWeight: "900" }}
                variant="h4"
              >
                Quang
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#fff", fontFamily: "Quicksand" }}
              >
                One of the outlying islands of the Ha Long Bay region and
                technically in Bai Tu Long bay, Quan Lạn has been sparsely
                inhabited for quite some time. There are a few thousand
                residents and an influx of local tourists from Hanoi on weekends
                and holidays. The island itself is pretty sandy and has little
                in the way of forest, unlike others nearby such as Ban Sen.
                Today, ports exist both at the northern and southern tips of the
                island. It is a less developed and less touristy alternative to
                the more popular Cat Ba Island.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} sx={{ background: "rgba(0,0,0,0.5)" }}>
            <CardMedia
              className={classes.media}
              component="img"
              height="140"
              image={island2}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                className={classes.title}
                sx={{ fontFamily: "Quicksand", fontWeight: "900" }}
                variant="h4"
              >
                Maldives
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#fff", fontFamily: "Quicksand" }}
              >
                The Maldives are home to some of the world's most ravishing
                islands, but it's the sea, which truly makes these islands
                shine. Luminous aquamarine waters with a crystal clarity lap
                upon these dazzling white shores, which barely peek above the
                Indian Ocean.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </div>
    </Collapse>
  );
}
