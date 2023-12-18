import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pramudya Reynaldi Salim </span>
            from <span className="purple"> Tangerang, Indonesia.</span>
            <br />
            I specialize as a Frontend Web Developer with a keen interest in the realm of technology.
            <br />
            <br />
            Beyond the coding sphere, here are some other activities that I find enjoyment in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engaging in Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Different Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Films
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to making a positive impact through technology!"{" "}
          </p>
          <footer className="blockquote-footer">Pramudya Reynaldi Salim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
