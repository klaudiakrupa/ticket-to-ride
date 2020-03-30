const draw = () => {
  var myArray = ["black", "blue", "green", "red"];

  return myArray[Math.floor(Math.random() * myArray.length)];
};

export default {
  draw
};
