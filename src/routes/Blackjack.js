import React, { useEffect, useState, useCallback } from 'react';
import './Blackjack.css';
import bjUML from '../images/bj-uml.png';
import bjBet from '../images/bj-bet.png';
import bjEnd from '../images/bj-end.png';
import bjGame from '../images/bj-game.png';
import bjHome from '../images/bj-home.png';
import bjSetup from '../images/bj-setup.png';

function Blackjack() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const showSlides = useCallback((n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 5) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 5;
      }
      return newIndex;
    });
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  // function showSlides(n) {
  //   let i;
  //   const slides = document.getElementsByClassName("mySlides");
  //   const dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {
  //     setSlideIndex(1);
  //   }
  //   if (n < 1) {
  //     setSlideIndex(slides.length);
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   if (slides[slideIndex - 1]) {
  //     slides[slideIndex - 1].style.display = "block";
  //   }
  //   if (dots[slideIndex - 1]) {
  //     dots[slideIndex - 1].className += " active";
  //   }
  // }

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

          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext">1 / 5</div>
              <img src={bjHome} style={{ width: '100%' }} alt="Home Screen" />
              <div className="text">Home Screen</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 5</div>
              <img src={bjSetup} style={{ width: '100%' }} alt="Deck Setup" />
              <div className="text">Deck Setup</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 5</div>
              <img src={bjBet} style={{ width: '100%' }} alt="Betting" />
              <div className="text">Betting</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">4 / 5</div>
              <img src={bjGame} style={{ width: '100%' }} alt="Game" />
              <div className="text">Game</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">5 / 5</div>
              <img src={bjEnd} style={{ width: '100%' }} alt="Ending Screen Example" />
              <div className="text">Ending Screen Example</div>
            </div>

            <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
            <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
          </div>
          <br />

          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            <span className="dot" onClick={() => currentSlide(4)}></span>
            <span className="dot" onClick={() => currentSlide(5)}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blackjack;
