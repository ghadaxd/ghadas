import React from "react";
import logo from "./assets/Ghaa'.png";
import personBadge from "./assets/person-badge.svg";
import stars from "./assets/stars.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import email from "./assets/mailbox.svg";
import twitter from "./assets/twitter.svg";
import "./style/base.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <section className="home">
          {/* <div className="logo-pixle"></div> */}
          <div className="home-content">
            <h1 className="hi">Hi,</h1>
            <p className="intro appear-from-right">
              I'm Ghada, = )
              <br />
              <br />
              On my way to be an amazing Front-end Web Developer.🚀
              <br />I like UI effects, animation, and bringing creative design
              to life! ✨
              {/* <br />
              I enjoy solving puzzles, coloring, and TEA. 💆🏻‍♀️
              <br />
              Always full of curiosity, seeking knowledge, reading posts, and
              growing. 💪🏼
              <br />
              Twitter is my favorite mini-books, Google is my best mentor.💁🏻‍♀️
              <br />
              <br />
              Happy coding. 👩🏻‍💻🧡 */}
            </p>
          </div>
          {/* <nav className="appear-from-right">
            <ul>
              <li>
                <a href="#home" target="_self" rel="noopener noreferrer">
                  <img
                    src={logo}
                    className="my-logo"
                    alt="Home page"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li></li>
              <li>
                <a href="#about" target="_self" rel="noopener noreferrer">
                  <img
                    src={personBadge}
                    alt="About me"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a href="#projects" target="_self" rel="noopener noreferrer">
                  <img
                    src={stars}
                    alt="My projects page."
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ghadaalaskar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="My account in Linkedin"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ghadaxd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    alt="My account in Github"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Gh_XD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="My account in Twitter"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:g.f.alaskar@gmail.com"
                  rel="noopener noreferrer"
                >
                  <img src={email} alt="My email" width="25" height="25" />
                </a>
              </li>
            </ul>
          </nav> */}
        </section>
      </div>
    );
  }
}

export default App;
