import React from "react";
import styled from "styled-components";

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
    box-shadow: 2px 2px 8px black;
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

function ListItems({ image, subtitle, title, pubDate, actor, userRating }) {
  return (
    <ListItem>
      <img src={`${image}`} alt="포스터" srcset="" />
      <Summary>
        <li>
          <h1>{title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</h1>
        </li>
        <li>
          <small>{pubDate}</small>
        </li>
        <li>
          <small>{subtitle.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</small>
        </li>
        <li>
          <span>출연:{actor.substring(15, 0)}...</span>
        </li>
        <li>
          <strong>{userRating} / 10</strong>
        </li>
      </Summary>
    </ListItem>
  );
}
function SearchList({ items }) {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItems
          key={item.link}
          image={item.image}
          subtitle={item.subtitle}
          title={item.title}
          pubDate={item.pubDate}
          actor={item.actor}
          userRating={item.userRating}
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
          <strong>{lists.display}</strong> 개의 결과가 있습니다.
        </small>
      </Title>
      <SearchList items={items} />
    </InfoContainer>
  );
}
