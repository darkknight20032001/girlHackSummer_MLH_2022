import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function WomenCards({ image, heading, para }) {
  return (
    <Card
      sx={{ maxWidth: 300 }}
      style={{
        border: "2px solid white",
        margin: "0px auto",
        boxShadow: "0px 10px 10px pink",
        
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          style={{ height: "10rem", overflow: "hidden" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
