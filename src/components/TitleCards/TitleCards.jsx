import React, { useEffect, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiDate] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjI1Mzc5OTBmNjY5ZmUwYzliNmZmODg0MDczOGRjYSIsIm5iZiI6MTczNTAxNTM0Ni40MzUwMDAyLCJzdWIiOiI2NzZhM2JiMmU4ZmE4NjYxYWY2NGFkODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IqOCr4_XB7ujmoIiwjMRX0bNPLF_qFdr9398mGGqPT0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?
       ? language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiDate(res.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
