import React from "react";

import components from "./styles";

const WelcomePage = () => {
  const {
    WelcomePage,
    ColorLayer,
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
    <WelcomePage>
      <ColorLayer>
        <Content>
          <MainText>
            <Title>WSIĄŚĆ DO POCIĄGU</Title>
            <Subtitle>wersja przegladarkowa</Subtitle>
          </MainText>
          <Buttons>
            <Input placeholder="Wpisz swoje imię, graczu!" />
            <Button>Zacznij rozgrywkę</Button>
          </Buttons>
          <BottomText>
            Projekt: klaudia krupa na podstawie gry twórców rebel
          </BottomText>
        </Content>
      </ColorLayer>
    </WelcomePage>
  );
};

export default WelcomePage;
