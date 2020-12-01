import React from 'react';
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.png'
import Avatar6 from '../assets/avatar6.png'
import { Form, Button } from 'react-bootstrap';

const TeamMemberSelect = () => {
    const [teamShow, setTeamShow] = useState(false)

    const findPortraitSource = (t) => {
        let source
        let img = t.image
        if (img === '1') {
            source = Avatar1
        } else if (img === '2') {
            source = Avatar2
        } else if (img === '3') {
            source = Avatar3
        } else if (img === '4') {
            source = Avatar4
        } else if (img === '5') {
            source = Avatar5
        } else if (img === '6') {
            source = Avatar6
        }
        return source
    }

    const submitTeam = (e) => {
        console.log(e)
    }

    const handleTeamMemberClick = (e) => {
        console.log(e)
    }
    
    return (
        <>
            <Form.Group controlId="formBasicCheckbox" className="team-member-checkbox">
            {totalTeamMembers.map(t => {
                return ( 
                    <label><img width="41" height="41" alt="archive" id="team-emblem" src={findPortraitSource(t)}/><Form.Check
                    onChange={(e) => handleTeamMemberClick(e)} type="checkbox" value={t}/></label>           
                )
            })}

            <br></br>
            <img width="15" onClick={(e) => submitTeam(e)} height="20" className="float-left" alt="archive" src={Check}/>
            <img width="19" onClick={() => setTeamShow(false)} height="24" className="float-right" alt="archive" src={X2}/>
            </Form.Group>
        </>
    )
    
}

export default TeamMemberSelect