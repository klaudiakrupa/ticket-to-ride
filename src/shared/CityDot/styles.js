import styled from "styled-components";

export default {
  Pin: styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
  `,

  CityName: styled.div`
    font-family: "Libre Baskerville", serif;
    color: #000;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    padding-bottom: 0.2rem;
  `,

  Dot: styled.div`
    background-color: rgba(0, 0, 0, 1);
    border-radius: 50%;
    height: 0.9rem;
    width: 0.9rem;
  `
};
