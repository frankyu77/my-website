import React, { useEffect, useState, useCallback } from 'react';
import './Blackjack.css';
import bjUML from '../images/bj-uml.png';
import bjBet from '../images/bj-bet.png';
import bjEnd from '../images/bj-end.png';
import bjGame from '../images/bj-game.png';
import bjHome from '../images/bj-home.png';
import bjSetup from '../images/bj-setup.png';
import ImageSlider from '../components/ImageSlider';

function Blackjack() {
  const slides = [
    { url: bjHome, title: "home" },
    { url: bjSetup, title: "setup" },
    { url: bjBet, title: "bet" },
    { url: bjGame, title: "game" },
    { url: bjEnd, title: "end" },
  ];

  return (
    <div className='blackjack'>
      <div className="title-container">
        <div className="title">
          <h1 className="name">Blackjack</h1>
        </div>
        <div className="description-container">
          <p>
            Dive into an exhilarating single-player Blackjack experience, developed with Java. This game boasts a variety of features, including the
            ability for users to customize their own deck, wager any amount within their means, and save or reload their previous sessions.
          </p>
          <p>
            The development journey began with creating a UML diagram to outline the essential classes and objects needed for the project. Despite
            numerous iterations, this final version of the diagram guided the implementation process:
          </p>
          <div className="uml-container">
            <img src={bjUML} alt="UML Diagram" style={{ width: '447px', height: '397px' }} />
          </div>
          <br />
          <br />
          <p>
            Initially designed as a terminal-based game, it eventually evolved into a fully functional GUI application. The game features a home screen
            where users can choose to start a new game, load their previous balance, continue from a saved game, or view the instructions. Users can then set
            up their own deck, enjoying the freedom to add or remove any cards. Once ready, they proceed to the betting screen to place their wagers before
            the game begins. Once the round is over, the ending screen will be different depending on the results, and the user will have the opportunity
            to rematch, save, or quit the game. The user is also able to save an instance of their game in the middle of the round as well.
          </p>

          <div className='slider-container'>
            <ImageSlider slides={slides} />
          </div>


        </div>
      </div>
    </div>
  );
}

export default Blackjack;
