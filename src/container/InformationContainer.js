import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import Information from "../componetns/Information";
import img from "../componetns/img/Preloader_1.gif";
import { Loading } from "../App";

async function fetchInfo(text) {
  const response = await axios.get(
    "/3/search/movie?api_key=74f9a2f51a30e2eb21c5a7eb362d8937",
    {
      params: { query: text, language: "ko", page: "30%C2%AEion=KR" },
    }
  );
  return response.data;
}

export default function InformationContainer({ match }) {
  const { text } = match.params;
  const [state] = useAsync(() => fetchInfo(text), [text]);

  const { loading, data: lists, error } = state;
  console.log(lists);
  if (loading)
    return (
      <Loading>
        Loading <img src={img} alt="" />
      </Loading>
    );
  if (error) return <div>에러...</div>;
  if (!lists) return <div>데이터 없음</div>;
  const { results } = lists;
  console.log(results);
  return (
    <div>
      <Information lists={lists} items={results} text={text} />
    </div>
  );
}
