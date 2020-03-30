import styled from "styled-components";

export default {
  Main: styled.div``,

  BlackLayer: styled.div`
    width: 100%;
    height 100%;
    background-color: rgba(25,24,24,0.63);
    z-index: 1000;
    position: absolute;
    display: block;

    ${props =>
      !props.display &&
      `
      animation-duration: 3s;
    animation-name: displayNone;
    animation-fill-mode: forwards;  

    @keyframes displayNone {
      from { background-color: rgba(25,24,24,0.63) };
      to { background-color: rgba(25,24,24,0) ;
        height: 0;
        overflow: hidden;};
    }
    `}
  `,

  ComputerMove: styled.div`
    font-family: "Libre Baskerville", serif;
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    padding-top: 1.7rem;
  `,

  Content: styled.div`
    height: 100%;
    width: 100%;

    @media (max-width: 1710px) {
      display: none;
    }
  `,

  Map: styled.div`
    background-image: url(${process.env.PUBLIC_URL + "/european-map.png"});
    background-size: 116rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 84%;
    width: 90%;
    margin: auto;
    min-width: 1692px;
    background-position: 0 -25rem;
  `,

  CapitalsLayer: styled.div`
    position: relative;
    height: 100%;
    width: 100%;
  `,

  PointsLabel: styled.div`
    background-image: url(${process.env.PUBLIC_URL + "/point-label.png"});
    background-size: auto 100%;
    height: 13rem;
    width: 21.25rem;
    z-index: 1;
    position: absolute;
    top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${props => props.side === "left" && `left: 3rem;    `}

    ${props =>
      props.side === "right" &&
      `
    right: 3rem;    
    `}
  `,

  PointsOwner: styled.div`
    font-family: "Parchment";
    font-size: 4.5rem;
    line-height: 3rem;
  `,

  Points: styled.div`
    font-family: "Parchment";
    line-height: 2.5rem;
    font-size: 7rem;
    color: #716f6e;
  `,

  SpecialTicket: styled.div`
    background-image: url(${process.env.PUBLIC_URL + "/special-ticket.png"});
    width: 35rem;
    height: 15.4rem;
    background-size: 100%;
    position: absolute;
    z-index: 10000;
    right: -23rem;
    top: 25rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${props =>
      props.centered &&
      `
      right: 41rem;
      cursor: auto;
    `}

    ${props =>
      !props.centered &&
      `
      animation-duration: 4s;
    animation-name: centeredHide;
    animation-fill-mode: forwards;  

    @keyframes centeredHide {
      from { right: 41rem };
      to { right: -23rem };
    }
    `}

    ${props =>
      props.show &&
      !props.centered &&
      `

    animation-duration: 2s;
    animation-name: show;
    animation-fill-mode: forwards;  

    @keyframes show {
      from { right: -23rem };
      to { right: 3rem };
    }
    `}

    ${props =>
      !props.show &&
      !props.centered &&
      `

    animation-duration: 2s;
    animation-name: hide;
    animation-fill-mode: forwards;  
    
    @keyframes hide {
      from { right: 3rem };
      to { right: -23rem };
    }
    `}

  `,

  TicketText: styled.div`
    width: fit-content;
    margin-left: 11rem;
    margin-top: 1rem;
  `,

  TicketDestination: styled.div`
    font-family: "Parchment";
    line-height: 2.5rem;
    font-size: 4rem;
    text-align: center;
    color: #3c3937;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  `,

  TicketPoints: styled.div`
    font-family: "Parchment";
    line-height: 4rem;
    font-size: 4rem;
    text-align: center;
    color: #d1543f;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  `,

  TopText: styled.div`
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    top: 13rem;
  `,

  BottomText: styled.div`
    position: relative;
    top: 37rem;
  `,

  WelcomeText: styled.div`
    font-family: "Parchment";
    line-height: 2.5rem;
    font-size: 6rem;
    text-align: center;
    color: #fff;

    ${props =>
      !props.display &&
      `
      animation-duration: 1s;
    animation-name: displayTextNone;
    animation-fill-mode: forwards;  

    @keyframes displayTextNone {
      from {  };
      to { color: rgba(255,255,255, 0);
    }
    `}
  `,

  Description: styled.div`
    font-family: "Libre Baskerville", serif;
    color: rgba(255, 255, 255, 0.61);
    text-align: center;
    letter-spacing: 0.05rem;
    font-size: 1.2rem;
    line-height: 2rem;

    ${props =>
      !props.display &&
      `
      animation-duration: 1s;
    animation-name: displayTextNone;
    animation-fill-mode: forwards;  
    `}
  `,

  ActionText: styled.div`
    font-family: "Libre Baskerville", serif;
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    cursor: pointer;

    ${props =>
      !props.display &&
      `
      animation-duration: 1s;
    animation-name: displayTextNone;
    animation-fill-mode: forwards;  
    `}

    &: hover {
      animation-name: startText;
      animation-duration: 1s;

      @keyframe startText {
        from {
          color: #fff;
        }
        to {
          color: #d1543f;
        }
      }
    }
  `
};
