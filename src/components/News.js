import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function News() {
  const [searchtext, setSearchText] = useState("");
  const [news, setNews] = useState([]);
  const handleChange = (e) => {
    setSearchText(e.target.value);
    // console.log(e.target.value);
  };

  //! UseEffect For The first Time Page Refreshed with Some News.
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=India Cricket&apiKey=cdc15de6bb314cdabfa05c52d00dc0a5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        setNews(data.articles);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getDetail = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${searchtext}&apiKey=cdc15de6bb314cdabfa05c52d00dc0a5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        setNews(data.articles);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="heading">
        <img
          src={
            "https://t4.ftcdn.net/jpg/03/14/80/29/360_F_314802929_rT7dk4HmbsocHtLenrn92XXPqG43RBn8.jpg"
          }
          alt="Img"
        />
        {/* <img src={"https://t3.ftcdn.net/jpg/04/70/74/72/240_F_470747287_RswIWal3wTKbNgDebTNtBR091V5s8IZZ.jpg"} alt="Img" className="img2"/> */}
      </div>
      <div className="search">
        <input
          type="text"
          className="searchbox"
          placeholder="Type Here To Search"
          onChange={handleChange}
        />
        <button className="search-btn" onClick={getDetail}>
          Search
        </button>
      </div>
      <div className="container">
        {news.map((article, index) => {
          return (
            <div className="article" key={index}>
              <img src={article.urlToImage} className="newsimg" alt="Img" />
              <h3>{article.title}</h3>

              <h4>Published: {article.publishedAt.slice(0, 10)}</h4>
              <div className="read">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More...
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
