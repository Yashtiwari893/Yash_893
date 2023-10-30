import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Samman Tiwari (Yash) </span>
            from <span className="purple"> Surat,Gujrat, India </span>
            <br/>I am a Second year student pursuing an B.Tech in  Information 
                Technology at BHAGWAN MAHAVIR UNIVERSITY SURAT.
            <br />
            Additionally, I am currently employed as a Front-End developer and python development at freelancer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Samman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
