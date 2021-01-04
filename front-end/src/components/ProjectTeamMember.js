import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectTeamMember = ({ team }) => {

    return (
        <Col>
            {team.name}
        </Col>
    )
}

export default ProjectTeamMember