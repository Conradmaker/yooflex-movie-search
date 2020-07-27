import React, { useEffect } from "react";
import Detial from "../componetns/Detial";
import { useSelector, useDispatch } from "react-redux";
import { PosterOpen } from "../modules/movie";

export default function DetailContainer({ location, history }) {
  const { state: item } = location;
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push("/");
  };
  useEffect(() => {
    const unblock = history.block("정말?");
    return () => {
      unblock();
    };
  }, [history]);
  const dispatch = useDispatch();
  const { poster } = useSelector((state) => state.movie);
  const onChan = () => {
    dispatch(PosterOpen());
  };
  return (
    <>
      <Detial
        item={item}
        onChan={onChan}
        poster={poster}
        goHome={goHome}
        goBack={goBack}
      />
    </>
  );
}
