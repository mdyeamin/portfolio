import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ProjectDetails.css'
const ProjectDetails = () => {

    const { projectId } = useParams()
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    const projectDetail = project?.find(detail => detail?.id === projectId)

    return (
        <>
            <h2 className="text-white">{projectDetail?.projectName}</h2>
            <div className="container more-detail">

                <Container>
                    <Row>

                        <Col xs={12} md={4}>
                            <div className="text-start" title="Link copy and paste new tab">
                                <a target="_blank" rel="noreferrer" href={projectDetail?.moreDetails?.website}>
                                    <h6 className="text-white"> {projectDetail?.moreDetails?.website && "Website:"} <span className="text-primary"> {projectDetail?.moreDetails?.website}</span></h6>
                                </a>

                                <a target="_blank" rel="noreferrer" href={projectDetail?.moreDetails?.frontend}>
                                    <h6 className="text-white"> {projectDetail?.moreDetails?.frontend && "Client Code:"}  <span className="text-primary">{projectDetail?.moreDetails?.frontend}</span></h6>
                                </a>

                                <a target="_blank" rel="noreferrer" href={projectDetail?.moreDetails?.backend}>
                                    <h6 className="text-white"> {projectDetail?.moreDetails?.backend && "Server Code:"}  <span className="text-primary">{projectDetail?.moreDetails?.backend}</span></h6>
                                </a>
                            </div>
                        </Col>

                        <Col xs={12} md={8}>
                            <img src={projectDetail?.moreDetails?.fullPic} alt="" />

                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ProjectDetails;
