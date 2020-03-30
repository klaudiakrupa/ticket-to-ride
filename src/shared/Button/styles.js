import styled from "styled-components";

export default {
  Button: styled.button`
    background-color: #eaeae9;
    font-family: "Libre Baskerville", serif;
    color: #5d5045;
    font-weight: 700;
    font-size: 1.1rem;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    border-radius: 1rem;
    height: 4rem;
    width: 17rem;
    margin: ${props => props.margin};

    &: focus {
      outline: none;
    }

    &: hover {
      box-shadow: inset 0 0 13px rgba(0, 0, 0, 1);
    }
  `
};
