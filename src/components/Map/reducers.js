const initialState = {
  blueCards: 0,
  blackCards: 0,
  redCards: 0,
  greenCards: 0
};

const cardsState = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_CARDS":
      const blue = action.payload.filter(x => x === "blue");
      const black = action.payload.filter(x => x === "black");
      const red = action.payload.filter(x => x === "red");
      const green = action.payload.filter(x => x === "green");
      return {
        blueCards: state.blueCards + blue.length,
        blackCards: state.blackCards + black.length,
        redCards: state.redCards + red.length,
        greenCards: state.greenCards + green.length
      };
    default:
      return state;
  }
};

export default cardsState;
