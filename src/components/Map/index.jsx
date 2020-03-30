import React, { useState } from "react";

import components from "./styles";
import Line from "../../shared/Line";
import Button from "../../shared/Button";
import Dot from "../../shared/CityDot";
import { Lines, Dots } from "./geoCordinates";

const WelcomePage = () => {
  const [showTicket, setShowTicket] = useState();
  const [startingPage, setStartingPage] = useState(true);

  const {
    Main,
    BlackLayer,
    ComputerMove,
    Content,
    Map,
    CapitalsLayer,
    PointsLabel,
    PointsOwner,
    Points,
    SpecialTicket,
    TicketDestination,
    TicketPoints,
    TicketText,
    TopText,
    BottomText,
    WelcomeText,
    Description,
    ActionText
  } = components;

  return (
    <Main>
      <BlackLayer display={startingPage}>
        <TopText>
          <WelcomeText display={startingPage}>
            Klaudia, oto twój bilet.
          </WelcomeText>
          <Description display={startingPage}>
            Aby zdobyć dodatkowe punkty na koniec,
            <br />
            musisz zrealizować poniższą trasę:
          </Description>
        </TopText>
        <BottomText>
          <ActionText
            display={startingPage}
            onClick={() => setStartingPage(false)}
          >
            zaczynamy!
          </ActionText>
        </BottomText>
      </BlackLayer>
      <ComputerMove>
        Komputer: losuje dwie karty - zostało mu 25 wagonów
      </ComputerMove>
      <Content>
        <PointsLabel side="left">
          <PointsOwner>punkty gracza:</PointsOwner>
          <Points>100</Points>
        </PointsLabel>
        <PointsLabel side="right">
          <PointsOwner>punkty komputera:</PointsOwner>
          <Points>100</Points>
        </PointsLabel>
        <SpecialTicket
          centered={startingPage}
          show={showTicket}
          onClick={() => setShowTicket(!showTicket)}
        >
          <TicketText>
            <TicketDestination>Londyn - Warszawa</TicketDestination>
            <TicketPoints>28 punktów</TicketPoints>
          </TicketText>
        </SpecialTicket>
        <Map>
          <CapitalsLayer>
            {Lines.map((x, idx) => (
              <Line
                key={`line-${idx}`}
                top={x.top}
                left={x.left}
                rotate={x.rotate}
                color={x.color}
                lenght={x.lenght}
              />
            ))}
            ;
            {Dots.map((y, idx) => (
              <Dot key={`dot-${idx}`} name={y.name} top={y.top} left={y.left} />
            ))}
            ;
          </CapitalsLayer>
          <Button margin="-2rem 0 0 1rem" text="losuj dwie karty" />
          <Button margin="-2rem 0 0 1rem" text="ułóż trasę" />
        </Map>
      </Content>
    </Main>
  );
};

export default WelcomePage;
