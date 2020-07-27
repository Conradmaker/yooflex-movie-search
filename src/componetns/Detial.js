import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Goback, GoHome } from "../App";

const zoom = keyframes`
from{
  width:0px;
  transform:translate(-150px,-200px)
}
to{
 width:300px;
 transform:translate(0,0)
}
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoSummary = styled.div`
  flex: 1;
  letter-spacing: 3px;
  small {
    font-weight: normal;
    font-size: 15px;
  }
  h2 {
    padding: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }
  h3 {
    margin-top: 10px;
    letter-spacing: 2px;
    line-height: 1.5;
    font-size: 19px;
    text-align: justify;
    font-weight: bold;
  }
  button {
    display: none;
  }
  @media (max-width: 1024px) {
    button {
      display: initial;
    }
  }
`;

const InfoImg = styled.div`
  width: 30%;
  height: auto;
  margin-right: 30px;

  img {
    width: 100%;
    box-shadow: 5px 5px 10px black;
  }
  @media (max-width: 1024px) {
    width: 90%;
    display: none;
    position: absolute;
    left: 20px;
    animation: ${zoom} 0.2s ease-in;
    ${(props) =>
      props.poster &&
      css`
        display: initial;
      `}
    img {
      width: 100%;
      box-shadow: 0px 0px 100px black;
    }
  }
`;

const InfoContainer = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  padding: 30px;
  background: white;
  color: black;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  display: flex;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 30px;
  }
`;

const Darker = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export default function Detial({ item, onChan, poster, goBack, goHome }) {
  console.log(poster);
  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    backdrop_path,
    overview,
  } = item;
  return (
    <DetailContainer
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
      }}
    >
      <Darker>
        <InfoContainer>
          <InfoImg poster={poster} onClick={onChan}>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
            />
          </InfoImg>
          <InfoSummary>
            <button poster={poster} onClick={onChan}>
              포스터
            </button>
            <Title>
              <small>Title: </small> {title}
            </Title>
            <h2>
              <small>original title: </small> {original_title}
            </h2>
            <h2>
              <small>개봉: </small> {release_date}
            </h2>
            <h2>
              <small>평점: </small> {vote_average} /10
            </h2>
            <h3>{overview}</h3>
          </InfoSummary>
        </InfoContainer>
      </Darker>
      <Goback onClick={goBack}>Back</Goback>
      <GoHome onClick={goHome}>Home</GoHome>
    </DetailContainer>
  );
}
