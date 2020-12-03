import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const Profile = ({ email, updateUser }) => {
    const [emailShow, setEmailShow] = useState(false)
    const [userEmail, setUserEmail] = useState(email)

    const toggleEmail = () => {
        setEmailShow(!emailShow)
        setUserEmail(email)
    }

    const submitEmail = (e) => {
        e.preventDefault()
        updateUser(userEmail)
        toggleEmail()
    }

    return (
        <>
            {!emailShow ?
                <tr onClick={() => toggleEmail()} className="user-email button2">{email}</tr>
                :
                <tr style={{ width: "50%", textAlign: "center" }} id="email-input" className="align-middle">
                    <Form.Control style={{ width: "60%", textAlign: "center" }} id="email-input" className="align-middle" onChange={e => setUserEmail(e.target.value)} value={userEmail} />
                </tr>
            }
            {emailShow ?
                <tr id="email-check">
                    <img width="15" height="20" onClick={(e) => submitEmail(e)} className="float-left align-middle button" alt="archive" src={Check} />
                    <div className="divider2" />
                    <img width="19" onClick={() => setEmailShow(false)} height="24" className="float-right align-middle button" alt="archive" src={X2} />
                </tr>
                :
                null
            }
        </>
    )

}

export default Profile