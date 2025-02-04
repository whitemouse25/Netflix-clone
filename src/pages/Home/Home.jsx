import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-text">
          <img src={hero_title} alt="" className="caption-img"></img>
          <p className="caption-text">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul remarks on a quest city from an immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn btn-dark">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
        <TitleCards title={"Upcoming"} category={"popular"} />
        <TitleCards title={"Only on Netflix"} category={"upcoming"} />
        <TitleCards title={"Top Picked for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
