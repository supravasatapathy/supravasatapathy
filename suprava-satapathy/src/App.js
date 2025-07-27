import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <img
          src="/img-supu.jpg" 
          alt="Suprava Satapathy"
          className="profile-img"
        />
        <h1>Suprava Satapathy</h1>
        <p className="subtitle">Web Developer | Designer | Learner</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Suprava, a passionate web developer with a love for building beautiful and functional web applications. I enjoy learning new technologies and collaborating on exciting projects.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Portfolio Website</strong> – My personal website built with React.
          </li>
          <li>
            <strong>Weather App</strong> – A simple weather app using OpenWeatherMap API.
          </li>
        </ul>
      </section>
      <footer>
        <p>
          Connect with me:
          <a href="mailto:supravasatapathy0@gmail.com"> Email</a> | 
          <a href="https://github.com/supravasatapathy" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;