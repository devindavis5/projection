import React from 'react';
import { Card, ListGroupItem, Table } from 'react-bootstrap';

const ProjectTask = ({task}) => {
    
    return (
        
        <tr>
        <td><strong>{task.deadline}</strong></td>
        <td>{task.description}</td>
        <td >Team...............</td>
        <td size="sm" style={{ textAlign:"right" }}>Edit</td>
        </tr>
      
    )
    
}

export default ProjectTask