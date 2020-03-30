import styled from "styled-components";

export default {
  Connect: styled.div`
    display: flex;
    z-index: 100;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: rotate(${props => props.rotate});
    align-items: center;
  `,

  Pin1: styled.div`
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
  `,

  Pin2: styled.div`
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    margin-left: 0.8rem;
  `,

  Dot: styled.div`
    background-color: rgba(0, 0, 0, 0);
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
  `,

  Line: styled.div`
    display: flex;
    cursor: pointer;

    ${props =>
      props.color === "red" &&
      `
    &:hover .element {
      background-color: rgba(220, 36, 36, 1);
    } `}
  ${props =>
    props.color === "black" &&
    `
  &:hover .element {
    background-color: rgba(0,0,0, 1);
  } `}
${props =>
  props.color === "green" &&
  `
&:hover .element {
  background-color: rgba(27,158, 79, 1);
} `}
${props =>
  props.color === "blue" &&
  `
&:hover .element {
  background-color: rgba(59, 127, 204, 1);
} `}
    
  `,

  LineElement: styled.div`
    height: 0.5rem;
    width: 2rem;
    margin-left: 0.8rem;
    
    ${props =>
      props.color === "red" &&
      `
      background-color: rgba(220, 36, 36, 0.35);
      `}
  ${props =>
    props.color === "black" &&
    `
    background-color: rgba(0, 0, 0, 0.25);
    `}
${props =>
  props.color === "green" &&
  `
  background-color: rgba(27,158, 79, 0.4);
  `}
${props =>
  props.color === "blue" &&
  `
  background-color: rgba(59, 127, 204, 0.45);
  `}
  `
};
