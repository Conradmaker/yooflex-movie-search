import React from "react";
import styled from "styled-components";
const Darker = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;
const BackgroundImg = styled.div`
  width: 100vh;
  height: 100vh;
`;

export default function Detial({ match }) {
  const { id } = match.params;
  return (
    <DetailContainer
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${id}')`,
      }}
    >
      <Darker>
        <BackgroundImg></BackgroundImg>
      </Darker>
    </DetailContainer>
  );
}
