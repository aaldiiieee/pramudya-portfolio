import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
} from "react-icons/di";

import {
  SiNextdotjs,
  SiPostgresql,
  SiJquery,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

import { FaLaravel, FaBootstrap } from "react-icons/fa";

const techIcons = [
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiMongodb,
  SiNextdotjs,
  DiGit,
  SiPostgresql,
  DiCss3,
  FaLaravel,
  SiJquery,
  FaBootstrap,
  SiMysql,
  SiTailwindcss,
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
