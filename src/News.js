import React, { useEffect, useState } from "react";
import Axios from "axios";

import NewsItems from "./component/NewsItems";

export default function News(props) {
  const [data, setData] = useState([]);
  const apiKey = "41d2839a840b4f6bba45da4f6d059a52";

  useEffect(() => {
    const getArticle = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=41d2839a840b4f6bba45da4f6d059a52"
      );

      console.log(res);
      setData(res.data.articles);
    };
    getArticle();
  }, []);

  //  useEffect(()=>{
  // const fetchApi = async () => {
  //   const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-06-27&sortBy=publishedAt&apiKey=${apiKey}`
  //   const response = await fetch(url)
  //   console.log(response)
  //   const data = await response.json()
  //   setData(data)
  //   console.log(data.articles[0].title)
  //   console.log(data.articles[0].author)

  // }

  //   fetchApi()
  //     }
  //   ,[])
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          paddingTop: "70px",
          color: "white",
          background: "rgb(0, 17, 255)",
          paddingBottom: "20px",
        }}
      >
        Global Trending Headlines
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: "1rem",
        }}
      >
        {data.map(({ title, description, url, urlToImage, i }) => (
          <NewsItems
            i={i}
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
          />
        ))}
      </div>
    </>
  );
}
