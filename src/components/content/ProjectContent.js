import React from 'react'
import  { Link } from 'react-router-dom';

function ProjectContent() {
    return (
        <div className='top'>
            <div className="projectContent">
                <Link to='/blackjack'>Blackjack</Link>
                <br />
                <Link to='/insightubc'>Insight UBC</Link>
            </div>
        </div>
    )
}

export default ProjectContent