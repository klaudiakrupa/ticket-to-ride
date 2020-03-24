import React from "react";
import { useHistory } from "react-router-dom";

import components from "./styles";

const WelcomePage = () => {
  const history = useHistory();

  const {
    WelcomePage,
    ColorLayer,
    MainText,
    Title,
    Subtitle,
    Button,
    Buttons,
    BottomText,
    Content
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
            <Button>Na czym polega gra?</Button>
            <Button onClick={() => history.push("/login")}>
              Zacznij rozgrywkę
            </Button>
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
