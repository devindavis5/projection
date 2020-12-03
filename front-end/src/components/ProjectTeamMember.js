import React from 'react';
import { ListGroupItem, Row, Col } from 'react-bootstrap';

const ProjectTeamMember = ({ team }) => {

    return (
        <Col>
            {team.name}
        </Col>
    )

}

export default ProjectTeamMember