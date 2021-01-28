import React from 'react';
import BannerImg from '../assets/images/banner.jpg'
import {Card, Col, Container, Image, Row} from "react-bootstrap";

const Banner = () => {
    return (
        <Container id="banner" fluid className="p-0 py-5">
            <Container>
                <Row>
                    <Col className="col-md-5 pt-5">
                        <Card id="banner-card">
                            <Card.Title id="banner-card-header">Header</Card.Title>
                            <Card.Text id="banner-card-body">Writing Essays help in developing the mental ability of a kid and contributes to his overall development. Encourage young minds to write short and simple 10 Lines Essays from an early age. As kids engage themselves in writing 10 Lines Essay</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default Banner;