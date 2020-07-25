import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import Information from "../componetns/Information";

async function fetchInfo(text) {
  const response = await axios.get("/v1/search/movie.json", {
    params: { query: text, display: 20 },
    headers: {
      "X-Naver-Client-Id": "_7RvPqFUsFw0JTtQxLeB",
      "X-Naver-Client-Secret": "GZh7wbrilT",
    },
  });
  return response.data;
}

export default function InformationContainer({ match }) {
  const { text } = match.params;
  const [state] = useAsync(() => fetchInfo(text), [text]);

  const { loading, data: lists, error } = state;
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러...</div>;
  if (!lists) return <div>데이터 없음</div>;
  const { items } = lists;
  console.log(items);
  return (
    <div>
      <Information lists={lists} items={items} text={text} />
    </div>
  );
}
