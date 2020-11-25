import React from 'react';
import { ListGroupItem} from 'react-bootstrap';
import Archive from '../assets/archive.png'

const DailyTasks = ({task}) => {
    
    return (
        
        <>
        <tr>
        <td class="align-middle">{task.description}</td>
        <td class="align-middle"size="sm" style={{ textAlign:"right" }}><img width="25" height="25" alt="archive" src={Archive}/></td>
        </tr>
        </>
    )   
}

export default DailyTasks