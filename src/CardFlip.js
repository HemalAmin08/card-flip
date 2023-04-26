// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Box, Grid } from "@mui/material";

export default function CardFlip() {
  const [flipCard, setFlipCard] = useState(true);

  const handleClick = (event) => {
    setFlipCard(!flipCard);
  };

  return (
    <>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="scene scene--card">
              <div
                // className="card"
                className={!flipCard ? "card " : "card is-flipped"}
                onClick={handleClick}
              >
                <div className={flipCard ? "card__face card__face--front" : ""}>
                  front
                </div>
                <div
                  className={"card__face card__face--back"}
                  // className="card__face card__face--back"
                >
                  back
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
