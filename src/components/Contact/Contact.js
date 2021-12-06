import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
    const [state, handleSubmit] = useForm("mwkykewr");
    if (state.succeeded) {
        return Swal.fire('Thank You For Email');
    }
    // const emailSend = () => {
    //     Swal.fire('Thank You For Email')
    // }
    return (
        <div>
            <h2 className="text-white">GET IN TOUCH</h2>
            <form action="https://formspree.io/f/mwkykewr" onSubmit={handleSubmit}>
                <Container>
                    <Row style={{ alignItems: 'center' }} className="input-area">
                        <Col sm={12} md={6}>
                            <div className="input">
                                <input placeholder="Name"
                                    type="text"
                                    name="name"
                                />
                                <br />
                                <input placeholder="Email"

                                    type="email"
                                    name="email"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <br />
                                <input placeholder="Subject"

                                    type="text"
                                    name="subject"
                                />
                            </div>

                        </Col>
                        <Col sm={12} md={6}>
                            <div className="">
                                <textarea placeholder="Messages"
                                    type="text"
                                    name="message"
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </Col>
                        <div className="text-md-start ms-md-4">
                            <Button type="submit" disabled={state.submitting} className="send">SEND</Button>
                        </div>
                    </Row>
                </Container>
            </form>
        </div>
    );
};

export default Contact;