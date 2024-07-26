import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./countries.module.css";

function CountryCard({ name, flag }) {
  // console.log(name,flag)
  return (
    <div>
      <Card
        variant="outlined"
        className={styles.CardImage}
        sx={{ maxWidth: 100 }}
      >
        <CardMedia
          component="img"
          height="100px"
          image={flag}
          alt={"Flag of " + name}
        />
        <Typography variant="body" color="text.primary">
          {name}
        </Typography>
      </Card>
    </div>
  );
}
export default CountryCard;
