import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import profile from '../../img/profile.png'
import { HiDocumentDownload } from 'react-icons/hi';
import Typical from 'react-typical'
const Home = () => {
    return (
        <div>
            <Container className="my-5">

                <Row style={{ alignItems: 'center' }}>
                    <Col sx={12} sm={6}>
                        <h1 className="text-md-start text-white">Hi!,
                            I'm Yeamin
                        </h1>
                        <h5 className="text-white text-md-start">I'm a{' '}

                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'Frontend Developer, 💻',
                                    1500,
                                    'Web Designer',
                                    1500,
                                    'Web Developer',
                                    1500,
                                    'API Developer',
                                    1500,


                                ]}
                            />

                        </h5>
                        <div className="resume text-md-start mt-4">
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/uc?export=download&id=1VY0HU-u08JcHzFz_YsekAbUs4G3fW4Pc" download> <Button className="me-3">Download CV <HiDocumentDownload /></Button></a>
                        </div>
                    </Col>

                    <Col sx={12} sm={6}>
                        <img style={{ width: "80%" }} src={profile} alt="" />

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;