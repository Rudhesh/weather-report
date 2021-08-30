import { useState, useEffect } from "react";
import LocalNews from "./LocalNews";
import NewsItems from "./NewsItems";

export default function More() {
  const apiKey = "2e3756b6ac1aa2eb42e0835c9900cc84";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?country=de&token=${apiKey}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        return setData(data.articles);
      });
  }, []);

  return (
    <div>
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
        Local Trending Headlines
      </h1>
      {/* <ul>
                    {data.map((item)=>{
                       return <li key = {item.url}>{item.content} {item.}</li>
                    })}
                </ul> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: "1rem",
        }}
      >
        {data.map(({ title, image, url, content, description }) => (
          <LocalNews
            title={title}
            image={image}
            url={url}
            content={content}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
