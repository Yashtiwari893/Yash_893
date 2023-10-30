import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import personal from "../../Assets/Projects/personal.png";
import about from "../../Assets/Projects/yash.png";
import login from "../../Assets/Projects/login.png";
import Whack   from "../../Assets/Projects/Whack-a-Mole Game.png";
import face from "../../Assets/face.png";
import age from "../../Assets/Projects/age.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Whack}
              isBlog={false}
              title="Whack-a-Mole Game"
              description="Whack-a-Mole is a classic arcade game that involves players using a mallet to hit toy moles as they pop up randomly from their holes."
              ghLink="https://github.com/Yashtiwari893/Game893"
              demoLink="https://game893.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={age}
              isBlog={false}
              title="Age Calculator"
              description="The Age Calculator is a simple web application designed to calculate a person's age based on their birthdate. This project is built using HTML, CSS, and JavaScript, making it an excellent educational tool for learning about front-end web development and date manipulation."
              ghLink="https://github.com/Yashtiwari893/Age_calculator"
              demoLink="https://age-klc893.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Modern Login and Signup Page"
              description="This project showcases a sleek and user-friendly authentication system built with HTML, CSS, JavaScript, and a focus on exceptional UI/UX design. Responsive Design: Our login and signup page is designed to be responsive, ensuring an optimal user experience on various devices, from desktops to mobile phones."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://yashtiwari893.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal}
              isBlog={false}
              title="Personal Business Website"
              description="The Personal Business Website is a custom website designed to promote and represent your personal or small business online. It's developed using HTML, CSS, and JavaScript, providing an interactive and visually appealing platform to showcase your products, services, portfolio, and contact information."
              ghLink="https://github.com/Yashtiwari893/Bussiness_website"
              demoLink="https://samman893.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={about}
              isBlog={false}
              title="About Us"
              description="About Us page of our project/organization! This web page is a showcase of who we are, what we do, and the talented individuals who make it all happen."
              ghLink="https://github.com/Yashtiwari893/ABOUT.US"
              demoLink="https://aboutus893.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face-Recognition-Attendance-System"
              description="Face Recognition Attendance System  a Python-based solution that leverages the power of computer vision and facial recognition to automate and modernize the traditional attendance management process."
              ghLink="https://github.com/Yashtiwari893/Face-Recognition-Attendance-System"
               
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
