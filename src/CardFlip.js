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

  const handleClick = (name, isFlipped) => {
    cardContentItem.forEach((e) => {
      // console.log(e, "e");
      // console.log(name, "id");
      e["isFlipped"] = false;
      if (e.name === name && !isFlipped) {
        e["isFlipped"] = true;
      } else if (e.name === name && isFlipped) {
        e["isFlipped"] = false;
      }
      return e;
    });
    // console.log(cardContentItem, "cardContentItem");
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
                    className={val.isFlipped ? "card  is-flipped" : "card"}
                    onClick={() => {
                      handleClick(val.name, val.isFlipped);
                    }}
                  >
                    <div
                      className={
                        !val.isFlipped
                          ? "card__face card__face--back"
                          : "card__face--back"
                      }
                    >
                      {val.name}
                    </div>
                    <div className="card__face card__face--front"></div>
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
