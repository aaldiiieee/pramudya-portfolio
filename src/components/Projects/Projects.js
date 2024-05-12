import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/background-car-rentals.png";
import cms from "../../Assets/Projects/background-cms.png";
import fstore from "../../Assets/Projects/background-fstore.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Car Rentals Website"
                            description=""
                            ghLink="https://github.com/PramudyaReynaldi/car-rentals"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cms}
                            isBlog={false}
                            title="CMS Car Rentals Website"
                            description=""
                            ghLink="https://github.com/PramudyaReynaldi/CMS_CAR_RENTALS"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={fstore}
                            isBlog={false}
                            title="FStore Website"
                            description=""
                            ghLink="https://github.com/PramudyaReynaldi/fashion-store"
                            demoLink="https://fstore-eight.vercel.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
