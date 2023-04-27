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
  const [cardContentItem, setCardContentItem] = useState(cardContent);

  const handleClick = (id) => {
    // console.log(id, "id");
    cardContentItem.forEach((e) => {
      // console.log(e.id === id, "e map");
      if (e.id === id) {
        setFlipCard(!flipCard);
      }
    });
  };
  const handleCardContentData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        setCardContentData(json);
      });
  };

  useEffect(() => {
    handleCardContentData();
  }, []);

  // console.log(cardContentData.results, "cardContentData"); // 20 pokemon data

  return (
    <>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          <Grid item x1={4}>
            {cardContent.map(({ name, id }) => {
              return (
                <div className="scene scene--card" key={id}>
                  <div
                    className={!flipCard ? "card  is-flipped" : "card"}
                    onClick={() => {
                      handleClick(id);
                    }}
                  >
                    <div
                      className={
                        flipCard
                          ? "card__face card__face--back"
                          : "card__face--back"
                      }
                    >
                      {name}
                    </div>
                    <div className="card__face card__face--front">front</div>
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
