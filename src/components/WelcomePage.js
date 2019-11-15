import React from "react";
import styled from 'styled-components';

const SubHeading = styled.h1`
  font-family: 'Finger Paint', cursive;
`;

const ImgContainer = styled.div`
  margin: 2rem auto;
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    box-shadow: 5px 10px 8px 8px #888888;
  }
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <SubHeading>Welcome to the ultimate fan site!</SubHeading>
        <ImgContainer>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </ImgContainer>
      </header>
    </section>
  );
}
