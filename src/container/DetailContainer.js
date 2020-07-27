import React from "react";
import Detial from "../componetns/Detial";

export default function DetailContainer({ location }) {
  const { state: item } = location;
  return (
    <>
      <Detial item={item} />
    </>
  );
}
