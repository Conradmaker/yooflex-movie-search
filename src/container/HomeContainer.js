import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import Home from "../componetns/Home";
import img from "../componetns/img/Preloader_1.gif";
import { Loading } from "../App";
import { useDispatch } from "react-redux";
import { searchText } from "../modules/movie";

async function fetchRanking(date) {
  const response = await axios.get(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=848021c515f98d75d9cde1ce36e73906&targetDt=${date}`
  );
  return response.data;
}

const year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
const day = new Date().getDate() - 1;
const date = year + "" + month + day;

export default function HomeContainer() {
  const dispatch = useDispatch();
  const onChan = (e) => dispatch(searchText(e.target.value));

  const [state] = useAsync(() => fetchRanking(date), [date]);
  const { loading, data: movies, error } = state;

  if (loading)
    return (
      <Loading>
        Loading <img src={img} alt="" />
      </Loading>
    );
  if (error) return <div>에러발생</div>;
  if (!movies) return <div>데이터 없음</div>;
  const { boxOfficeResult } = movies;
  const { dailyBoxOfficeList: movie } = boxOfficeResult;
  console.log(boxOfficeResult.showRange);
  return (
    <div>
      <Home movies={boxOfficeResult} movie={movie} onChan={onChan} />
    </div>
  );
}
