import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const ProjectContact = ({contact}) => {
    
    return (
        <>
        <tr>
        <td class="align-middle" id="contact"><strong>{contact.name}</strong></td>
        <td class="align-middle">{contact.email}</td>
        <td class="align-middle" id="phone" >{contact.phone}</td>
        <td class="align-middle">{contact.notes}</td>
        <td class="align-middle"size="sm" style={{ textAlign:"right" }}>EditDel</td>
        </tr>
        </>
    )
    
}

export default ProjectContact