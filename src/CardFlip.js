/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Box, Grid } from "@mui/material";
import cardContent from "./CardContent";

export default function CardFlip() {
  const [flipCard, setFlipCard] = useState(true);
  const [cardContentData, setCardContentData] = useState([]);
  const [cardContentItem, setCardContentItem] = useState([]);

  const handleClick = (id, isFliped) => {
    // console.log(id, "id");
    cardContentItem.forEach((e) => {
      e["isFliped"] = false;
      if (e.name === id && !isFliped) {
        e["isFliped"] = true;
      } else if (e.name === id && isFliped) {
        e["isFliped"] = false;
      }
      return e;
    });
    console.log(cardContentItem, "cardContentItem");
    setCardContentItem(() => {
      return [...cardContentItem];
    });
  };
  const handleCardContentData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        const arrLength = json.results.length;
        const randomIndex = Math.floor(Math.random() * (arrLength - 4));
        const randomFive = json.results.slice(randomIndex, randomIndex + 5);
        setCardContentItem(randomFive);
      });
  };

  useEffect(() => {
    handleCardContentData();
  }, []);

  // console.log(cardContentItem, "cardContentData"); // 20 pokemon data

  return (
    <>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          <Grid item x1={4}>
            {cardContentItem.map((val, index) => {
              return (
                <div className="scene scene--card" key={index}>
                  <div
                    className={val.isFliped ? "card  is-flipped" : "card"}
                    onClick={() => {
                      handleClick(val.name, val.isFliped);
                    }}
                  >
                    <div
                      className={
                        !val.isFliped
                          ? "card__face card__face--back"
                          : "card__face--back"
                      }
                    >
                      {val.name}
                    </div>
                    <div className="card__face card__face--front">Front</div>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
