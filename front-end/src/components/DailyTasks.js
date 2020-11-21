import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const DailyTasks = ({task}) => {
    
    return (
        <ListGroupItem>{task.description}</ListGroupItem>
    )   
}

export default DailyTasks