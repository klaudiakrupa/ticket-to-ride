import React from "react";

import components from "./styles";

const ButtonComponent = ({ text, onClick, margin }) => {
  const { Button } = components;

  return (
    <Button margin={margin} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
