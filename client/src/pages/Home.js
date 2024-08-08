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
            <img src="path/to/valorant-image.jpg" alt="Valorant" />
            <h3>Valorant</h3>
          </div>
          <div className="game-card">
            <img src="path/to/wow-image.jpg" alt="World of Warcraft" />
            <h3>World of Warcraft</h3>
          </div>
          <div className="game-card">
            <img src="path/to/csgo-image.jpg" alt="CS:GO" />
            <h3>CS:GO</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;