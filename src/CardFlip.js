/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Box, Grid } from "@mui/material";
import cardContent from "./CardContent";

export default function CardFlip() {
  const [cardContentItem, setCardContentItem] = useState([]);

  const handleClick = (value, index) => {
    cardContentItem[index].isFlipped = value;

    //
    // if (cardContentItem[index]) {
    //   cardContentItem[index].isFlipped = value;
    // } else if (cardContentItem[index]) {
    //   cardContentItem[index].isFlipped = false;
    // }
    //
    // cardContentItem.forEach((e) => {
    //   if (e.name === name && !isFlipped) {
    //     e.isFlipped = true;
    //   } else if (e.name === name && isFlipped) {
    //     e.isFlipped = false;
    //   }
    //   return e;
    // });
    setCardContentItem([...cardContentItem]);
  };

  const handleCardContentData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((json) => {
        const arrLength = json.results.length;
        const randomIndex = Math.floor(Math.random() * (arrLength - 4));
        const randomFive = json.results.slice(randomIndex, randomIndex + 5);
        setCardContentItem(
          randomFive.map((obj) => ({ ...obj, isFlipped: false }))
        );
      });
  };

  useEffect(() => {
    handleCardContentData();
  }, []);

  // console.log(cardContentItem, "cardContentItem"); // 20 pokemon data

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
                    className={val.isFlipped ? "card is-flipped" : "card"}
                    onClick={() => {
                      handleClick(!val.isFlipped, index);
                    }}
                  >
                    <div
                      className={
                        !val.isFlipped
                          ? "card__face card__face--back"
                          : "card__face--back"
                      }
                    >
                      <img
                        src={`https://img.pokemondb.net/artwork/large/${val.name}.jpg`}
                        className="img"
                        alt="img"
                      />
                      <p className="pokemonName">{val.name}</p>
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
