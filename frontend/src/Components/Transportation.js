import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Transportation({
  image,
  transporter,
  setTransport,
  transport,
  clicked,
  setClicked,
}) {
  return (
    <Card
      sx={{ maxWidth: 200 }}
      onClick={(e) => {
        e.preventDefault();

        setClicked(true);
        setTransport(transporter);
        alert(`Your ${transporter} is booked now`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {transporter.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
