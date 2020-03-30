import styled from "styled-components";

export default {
  Content: styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  MainText: styled.div`
    padding: 4rem 2rem;
  `,

  Title: styled.h1`
    font-family: "Libre Baskerville", serif;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-align: center;
    margin: 0;
  `,

  Subtitle: styled.h4`
    font-family: "Parchment";
    color: rgba(255, 255, 255, 0.45);
    font-size: 6rem;
    font-weight: 100;
    text-align: center;
    margin: 0;
    line-height: 4rem;
  `,
  Buttons: styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0 auto;
    height: 15rem;
    justify-content: space-around;
  `,

  BottomText: styled.h4`
    color: #fff;
    font-family: "Parchment";
    font-size: 3.5rem;
    font-weight: 100;
    text-align: center;
  `
};
