import React from "react";

import components from "./styles";

// to do - proptypes

const CityDot = ({ name, top, left }) => {
  const { Pin, CityName, Dot } = components;

  return (
    <Pin top={top} left={left}>
      <CityName>{name}</CityName>
      <Dot></Dot>
    </Pin>
  );
};

export default CityDot;
