import React from "react";
import { useHistory } from "react-router-dom";

import components from "./styles";

const WelcomePage = () => {
  const history = useHistory();

  const {
    MainText,
    Title,
    Subtitle,
    Button,
    Buttons,
    BottomText,
    Content,
    Input
  } = components;

  return (
    <Content>
      <MainText>
        <Title>WSIĄŚĆ DO POCIĄGU</Title>
        <Subtitle>wersja przegladarkowa</Subtitle>
      </MainText>
      <Buttons>
        <Input placeholder="Wpisz swoje imię, graczu!" />
        <Button onClick={() => history.push("/game")}>Start</Button>
      </Buttons>
      <BottomText>
        Projekt: klaudia krupa na podstawie gry twórców rebel
      </BottomText>
    </Content>
  );
};

export default WelcomePage;
