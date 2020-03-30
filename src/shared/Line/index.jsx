import React from "react";

import components from "./styles";

// to do - proptypes

const Line = ({ top, left, rotate, color, lenght }) => {
  const { Connect, Pin1, Pin2, Dot, Line, LineElement } = components;

  const lines = [...Array(lenght).keys()];

  return (
    <Connect top={top} left={left} rotate={rotate}>
      <Pin1>
        <Dot />
      </Pin1>
      <Line color={color}>
        {lines.map(x => (
          <LineElement
            key={`line-element-${x}`}
            color={color}
            className="element"
          />
        ))}
      </Line>
      <Pin2>
        <Dot />
      </Pin2>
    </Connect>
  );
};

export default Line;
