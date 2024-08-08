import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to GameGuideTV</h1>
        <p>Your ultimate source for video game guides and tutorials.</p>
      </div>
      <div className="featured-games">
        <h2>Featured Games</h2>
        <div className="games-list">
          <div className="game-card">
          <img src={`${process.env.PUBLIC_URL}/images/valorant.png`} alt="Valorant" />
            <h3>Valorant</h3>
          </div>
          <div className="game-card">
            <img src={`${process.env.PUBLIC_URL}/images/worldofwarcraft.png`} alt="World of Warcraft" />
            <h3>World of Warcraft</h3>
          </div>
          <div className="game-card">
            <img src={`${process.env.PUBLIC_URL}/images/csgo.png`} alt="CS:GO" />
            <h3>CS:GO</h3>
          </div>
          <div className="game-card">
            <img src={`${process.env.PUBLIC_URL}/images/leagueoflegends.png`} alt="League of Legends" />
            <h3>League of Legends</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;