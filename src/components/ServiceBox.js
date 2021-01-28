import React from 'react';
import {Col} from "react-bootstrap";

const ServiceBox = ({icon, title, body}) => (
    <Col className="col-md-4">
        <div className="service-box">
            <i className={`fa ${icon} align-items-center`}/>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    </Col>
);

export default ServiceBox;