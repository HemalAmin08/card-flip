// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Box, Grid } from "@mui/material";

export default function CardFlip() {
  const [flipCard, setFlipCard] = useState(true);

  // const handleClick = (event) => {
  //   setFlipCard((current) => !current);
  // };

  // <button className={this.state.active && 'active'}
  //     onClick={ () => this.setState({active: !this.state.active}) }>Click me</button>

  return (
    <>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="scene scene--card">
              <div className="card">
                <div
                  className={flipCard ? "card__face card__face--front" : ""}
                  // onClick={handleClick}
                >
                  front
                </div>
                <div
                  className={flipCard ? "card__face card__face--back" : ""}
                  // onClick={handleClick}
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
