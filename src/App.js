import React, { useState } from "react";
import CardFlip from "./CardFlip";
import darkAndLightMode from "./DarkAndLightMode";

export default function App() {
  const [themeColor, setThemeColor] = useState([]);
  return (
    <>
      <darkAndLightMode.Provider value={{ themeColor, setThemeColor }}>
        <CardFlip />
      </darkAndLightMode.Provider>
    </>
  );
}
