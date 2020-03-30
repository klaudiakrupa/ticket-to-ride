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

  Button: styled.button`
    background-color: #eaeae9;
    font-family: "Libre Baskerville", serif;
    color: #5d5045;
    font-weight: 700;
    font-size: 1.2rem;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    border-radius: 1rem;
    height: 4.5rem;
    width: 23rem;

    &: focus {
      outline: none;
    }

    &: hover {
      box-shadow: inset 0 0 13px rgba(0, 0, 0, 1);
    }
  `,

  BottomText: styled.h4`
    color: #fff;
    font-family: "Parchment";
    font-size: 3.5rem;
    font-weight: 100;
    text-align: center;
  `,

  Input: styled.input`
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid #fff;
    font-family: "Libre Baskerville", serif;
    color: #fff;
    padding: 1.5rem 1rem;
    font-size: 1.1rem;
    text-align: center;

    &::-webkit-input-placeholder {
      color: #fff;
      text-align: center;
    }
  `
};
