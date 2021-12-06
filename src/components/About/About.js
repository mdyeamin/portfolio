import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './About.css'
import about from '../../img/about.png'
import { NavLink } from 'react-router-dom';
// import { SkillBar } from 'react-skills';


const About = () => {

    return (
        <div>
            <h2 className="text-white mt-5">ABOUT ME</h2>
            <Container className="my-5">

                <Row style={{ alignItems: 'center' }}>
                    <Col sx={12} sm={4}>
                        <img style={{ width: "80%" }} src={about} alt="" />
                    </Col>

                    <Col sx={12} sm={8}>
                        <div>
                            <p className="text-white text-start">
                                <span className="fs-5">Hi! my name is "Md Yeamin". I am a Frontend junior web developer and I am enthusiastic of programming.</span><br />
                                <span className="fs-6"> I have more than 1+ years of experience in web design and web development.</span>
                            </p>
                            <br />
                            <p className="text-white text-start">
                                <span className="fs-6"> I am a Frontend web Developer with the skill HTML, CSS, bootstrap, Material UI, Javascript, React.js, etc. <br />
                                    And I'm trying to learn backend MongoDB, express.js, node.js <br />
                                    I did some work in the backend,<br />
                                    I hope to become a full-stack developer very soon</span>
                            </p>
                            <p className="text-white text-start">
                                <span className="fs-6">I'm a Frontend web developer and Fancy web designer. I started building websites in 2020. I know how to make an appealing website. Though I am a junior Developer and designer but I am very Confident about my work .</span>
                            </p>
                            <div className="resume text-md-start">

                                <NavLink to="/contact"><Button className="ms-3">Hire Me</Button></NavLink>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>
            {/* <Container>
                <Row> <Col sx={12} md={6}>
                    <SkillBar name="HTML, CSS" level={90} color="#2B2E33" /><br />
                    <SkillBar name="HTML, CSS" level={90} color="#2B2E33" /><br />
                    <SkillBar name="Bootstrap" level={90} color="#2B2E33" /><br />
                    <SkillBar name="HTML, CSS" level={90} color="#2B2E33" /><br />

                </Col>
                    <Col sx={12} md={6}>
                        <SkillBar name="HTML, CSS" level={90} color="#2B2E33" /><br />
                        <SkillBar name="HTML, CSS" level={90} color="#2B2E33" /><br />
                        <SkillBar name="HTML, CSS" level={90} color="#2B2E33" /><br />
                        <SkillBar name="HTML, CSS" level={75} color="#2B2E33" />
                    </Col></Row>
            </Container> */}
        </div>

    );
};

export default About;