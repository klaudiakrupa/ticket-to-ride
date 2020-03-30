import styled from "styled-components";

export default {
  App: styled.div`
    height: 100%;
    width: 100%;
  `,

  MapBackground: styled.div`
    background-image: url(${process.env.PUBLIC_URL + "/map.jpg"});
    height: 100%;
    width: 100%;
    background-size: 130rem;
    background-position: center;
    object-fit: contain;
  `,

  ColorLayer: styled.div`
    background-color: rgba(40, 40, 41, 0.54);
    height: 100%;
    width: 100%;
  `
};
