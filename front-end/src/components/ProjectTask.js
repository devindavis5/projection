import React from 'react';
import { Card, ListGroupItem, Table, Form } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';

const ProjectTask = ({task}) => {
        let split = task.deadline.split('-')
        let mm = split[1]
        let dd = split[2]
        let yyyy = split[0]
        let deadline = mm + '/' + dd + '/' + yyyy

    return (
        <>
        <tr>
        <td class="align-middle"><strong>{deadline}</strong>
        <Form.Group controlId="dob">
            <Form.Control type="date" name="date" />
        </Form.Group>
        </td>
        <td class="align-middle">{task.description}</td>
        {/* <td >Team...............</td> */}
        <td class="align-middle"size="sm" style={{ textAlign:"right" }}><button type="button" class="btn btn-primary">X</button></td>
        </tr>
        </>
    )
    
}

export default ProjectTask