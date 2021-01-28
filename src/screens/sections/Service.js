import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ServiceBox from "../../components/ServiceBox";


const Service = () => {
    return (
        <Container className="section">
            <Row>
                <Col className="col-md-12">
                    <h2 className="section-head">Some Heading Goes Here</h2>
                    <Row md={3}>
                            <ServiceBox icon="fa-anchor" title="Service 1" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, voluptates." />
                            <ServiceBox icon="fa-bar-chart" title="Service 2" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, voluptates." />
                            <ServiceBox icon="fa-diamond" title="Service 3" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, voluptates." />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Service;