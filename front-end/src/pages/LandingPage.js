import React from 'react';
import ProjectCard from '../components/ProjectCard.js'
import Navbar from '../components/Navbar.js'
import DailyTasks from '../components/DailyTasks.js'
import TeamMembers from '../components/TeamMembers.js'

const LandingPage = () => {

    return (
        <div>
            <Navbar />
            <h1>LandingPage</h1>
            <ProjectCard />
            <DailyTasks />
            <TeamMembers />
        </div>
    )
}

export default LandingPage