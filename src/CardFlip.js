/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Box, Grid } from "@mui/material";
import { cleanup } from "@testing-library/react";

export default function CardFlip() {
  const [cardContentItem, setCardContentItem] = useState([]);

  const handleClick = (value, index) => {
    cardContentItem[index].isFlipped = value;
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

  const handleCloseCard = () => {
    const newArray = cardContentItem.map((item) => {
      return { ...item, isFlipped: false };
    });
    const timeOut = setTimeout(() => {
      setCardContentItem(newArray);
    }, 5000);
    return timeOut;
  };

  useEffect(() => {
    const callFunc = handleCloseCard();
    return () => {
      clearTimeout(callFunc);
    };
  }, [cardContentItem]);

  useEffect(() => {
    handleCardContentData();
  }, []);

  return (
    <>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          {cardContentItem.map((val, index) => {
            return (
              <Grid item x1={4} key={index}>
                <div className="scene scene--card">
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
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
