import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const slide = keyframes`
from{
  transform:translateY(-260px)
}
to{
  transform:translateY(0px)
}
`;

const RankingList = styled.ul`
  font-size: 20px;
  li {
    h3 {
      margin-top: 10px;
      margin-bottom: 3px;
      font-size: 25px;
      font-weight: 700;
      color: white;
    }
    small {
      font-weight: 400;
      font-size: 16px;
      color: #e0e0e0;
      strong {
        letter-spacing: 4px;
        font-size: 18px;
        color: white;
      }
    }
  }
`;
const RankingDate = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  small {
    font-weight: 400;
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    margin: 5px 0;
  }
`;
const Ranking = styled.section`
  display: flex;
  flex-direction: column;
`;
const Search = styled.form`
  display: flex;
  input {
    width: 300px;
    padding: 10px;
    font-size: 20px;
    border: none;
    outline: none;
    background: #e0e0e0;
  }
  button {
    padding: 10px;
    font-size: 20px;
    border: none;

    outline: none;
    background: #e0e0e0;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    input {
      width: 250px;
      margin-bottom: 20px;
      &:focus {
        width: 90%;
        position: fixed;
        top: 350px;
        left: 10px;
        right: 10px;
        box-shadow: 0 0 40px black;
        animation: ${slide} 10s ease-in;
      }
    }
  }
`;
const Title = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  h1 {
    font-size: 80px;
    font-weight: bold;
    letter-spacing: 10px;
    text-align: center;
    text-shadow: 0 0 15px #6d6d6d;
  }
  @media (max-width: 1024px) {
    margin-bottom: 10px;
    h1 {
      font-size: 50px;
    }
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-top: 15px;
  }
`;
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

function ListItem({ rank, movieNm, audiAcc, audiCnt }) {
  return (
    <li>
      <h3>
        <small>{rank}위.</small> {movieNm}
      </h3>
      <small>
        전일관객: <strong>{audiCnt}</strong> 누적관객:{" "}
        <strong>{audiAcc}</strong> 명
      </small>
    </li>
  );
}

export default function Home({ movies, movie, onChan }) {
  const { text } = useSelector((state) => state.movie);

  return (
    <HomeContainer>
      <LeftBox>
        <Title>
          <h1>YOOFLEX</h1>
        </Title>
        <Search>
          <input
            placeholder="제목을 입력하세요"
            onChange={onChan}
            value={text}
          />

          <Link to={`/search/${text}`}>
            <button type="submit">검색 </button>
          </Link>
        </Search>
      </LeftBox>
      <Ranking>
        <RankingDate>
          <small>날짜:</small> {movies.showRange}
        </RankingDate>
        <RankingList>
          {movie.map((item) => (
            <ListItem
              key={item.rnum}
              rank={item.rank}
              movieNm={item.movieNm}
              audiAcc={item.audiAcc}
              audiCnt={item.audiCnt}
            />
          ))}
        </RankingList>
      </Ranking>
    </HomeContainer>
  );
}
