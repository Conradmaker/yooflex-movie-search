import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Summary = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  li {
    overflow: hidden;
    h1 {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 3px;
    }
    small {
      display: block;
      letter-spacing: 3px;
      font-size: 13px;
      margin-bottom: 3px;
    }
    span {
      display: block;
      margin-top: 7px;
    }
    strong {
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 3px;
    }
  }
  li:last-child {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ListItem = styled.div`
  height: 200px;
  background: #1b1b1b;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 2px 2px 5px #1b1b1b;
  color: #aeaeae;

  display: flex;
  img {
    width: 150px;
    height: 210px;
    position: relative;
    top: -40px;
    box-shadow: 1px 2px 8px black;
  }
  &:hover {
    background: #484848;
    box-shadow: 0px 0px 15px black;
    border: 1px solid gray;
  }

  @media (max-width: 1024px) {
    margin-bottom: 35px;
  }
`;

const ListContainer = styled.section`
  width: 90%;
  height: auto;
  box-sizing: border-box;
  margin: 20px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  small {
    font-size: 18px;
    strong {
      font-size: 24px;
    }
  }
  h1 {
    font-size: 27px;
    margin-bottom: 10px;
    strong {
      font-size: 30px;
      font-weight: bold;
    }
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

function ListItems({
  poster_path,
  original_title,
  title,
  pubDate,
  release_date,
  vote_average,
  id,
  backdrop_path,
  overview,
}) {
  return (
    <Link
      to={{
        pathname: "/detail",
        state: {
          poster_path,
          original_title,
          title,
          release_date,
          vote_average,
          backdrop_path,
          overview,
        },
      }}
    >
      <ListItem>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : "noImg"
          }
          alt="포스터"
          srcset=""
        />
        <Summary>
          <li>
            <h1>{title}</h1>
          </li>
          <li>
            <small>{pubDate}</small>
          </li>
          <li>
            <small>{original_title}</small>
          </li>
          <li>
            <span>release: {release_date}</span>
          </li>
          <li>
            <strong>{vote_average} / 10</strong>
          </li>
        </Summary>
      </ListItem>
    </Link>
  );
}
function SearchList({ items }) {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItems
          key={item.id}
          id={item.id}
          poster_path={item.poster_path}
          original_title={item.original_title}
          title={item.title}
          pubDate={item.pubDate}
          release_date={item.release_date}
          vote_average={item.vote_average}
          backdrop_path={item.backdrop_path}
          overview={item.overview}
        />
      ))}
    </ListContainer>
  );
}
export default function Information({ lists, items, text }) {
  return (
    <InfoContainer>
      <Title>
        <h1>
          <strong>{text}</strong> 검색결과
        </h1>
        <small>
          <strong>{lists.total_results}</strong> 개의 결과가 있습니다.
        </small>
      </Title>
      <SearchList items={items} />
    </InfoContainer>
  );
}
