import React from "react";
import mock07 from "../assets/images/mock07.png";
import unwraplanding from "../assets/images/unwraplanding.png";
import chessmultiplayer from "../assets/images/chessmultiplayer.png";
import steamrec from "../assets/images/steamrec.jpeg";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://unwrap.love" target="_blank" rel="noreferrer">
            <img
              src={unwraplanding}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a href="https://unwrap.love" target="_blank" rel="noreferrer">
            <h2>Unwrap Love</h2>
          </a>
          <p>
            Developed online gift creation platform with AI integration.
            Features include media, voice recording, spotify widgets api,
            scheduled email delivery and collaboration on a canvas. Built with
            MERN stack.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/SaikatBaidya/Chess-Multiplayer-Sockets"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={chessmultiplayer}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/SaikatBaidya/Chess-Multiplayer-Sockets"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Chess Multiplayer</h2>
          </a>
          <p>
            Designed and developed a chess multiplayer game using C# that
            supports a session of 2 players.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/SaikatBaidya/Steam-Recommendations"
            target="_blank"
            rel="noreferrer"
          >
            <img src={steamrec} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/SaikatBaidya/Steam-Recommendations"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Steam Rec : Video Game Recommendations Platform</h2>
          </a>
          <p>
            Developed and released a cross platform mobile based application
            that recommends video games using React native.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/SaikatBaidya/FundMe-Foundry"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/SaikatBaidya/FundMe-Foundry"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Crowd Funding Contract</h2>
          </a>
          <p>
            This is a crowd funding smart contract built using Solidity and
            Foundry. This contract allows users to fund the contract and the
            owner to withdraw the funds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
