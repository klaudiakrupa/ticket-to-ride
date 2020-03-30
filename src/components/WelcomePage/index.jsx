import React from "react";
import { useHistory } from "react-router-dom";

import components from "./styles";
import Button from "../../shared/Button";

const WelcomePage = () => {
  const history = useHistory();

  const {
    MainText,
    Title,
    Subtitle,
    Buttons,
    BottomText,
    Content
  } = components;

  return (
    <Content>
      <MainText>
        <Title>WSIĄŚĆ DO POCIĄGU</Title>
        <Subtitle>wersja przegladarkowa</Subtitle>
      </MainText>
      <Buttons>
        <Button text="Na czym polega gra?" />
        <Button
          onClick={() => history.push("/login")}
          text="Zacznij rozgrywkę"
        />
      </Buttons>
      <BottomText>
        Projekt: klaudia krupa na podstawie gry twórców rebel
      </BottomText>
    </Content>
  );
};

export default WelcomePage;
