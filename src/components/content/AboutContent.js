import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutContent.css';
import me from '../../images/me.jpg';
import me2 from '../../images/me2.JPG';

function aboutContent() {
    return (
        <div className='top'>
            <div className="aboutContent">
                <p>I am an aspiring software developer hoping to expand my technical experiences and dive deeper into the tech world!</p>
                <div className="pictures">
                    <figure className='pic'>
                        <img src={me} alt="me" style={{ width: '293px', height: '393px' }} />
                        <figcaption className='image-caption'>Toronto Islands</figcaption>
                    </figure>

                    <figure className='pic'>
                        <img src={me2} alt="me2" style={{ width: '293px', height: '393px' }} />
                        <figcaption className='image-caption'>Glenmore Reservoir, Calgary</figcaption>
                    </figure>
                </div>

                <p>
                    Originally from Calgary, Alberta, I am currently studying at the <strong>University of British Columbia</strong>, majoring in <strong>Computer Science </strong>
                    with a minor in <strong>Commerce</strong>. This combination allows me to continuously challenge my problem-solving and critical thinking skills
                    while applying my knowledge to real-world scenarios! I chose Commerce as my minor because I am eager to understand how organizations
                    operate, from bigger companies to startup businesses, and to educate myself about the market and economy.
                </p>
                <p>
                    Lately, I've been deeply immersed in the world of <strong>machine learning</strong> and its expansive range of applications. My focus lies primarily in
                    understanding various algorithms such as the genetic algorithm, NeuroEvolution of Augmented Topologies (NEAT), and Proximal Policy
                    Optimization (PPO), among others. One of the sources that truly captivates me is CodeBullet's YouTube channel, where he is constantly
                    applying these machine learning algorithms to conquer diverse gaming challenges. It's both inspiring and educational to witness how
                    these algorithms are brought to life in such creative and practical ways and I am eager to create my own projects on these topics!
                </p>
                <p>
                    Some of my hobbies include playing badminton, volleyball, basketball, working out, and fishing. Lately I've also been challenging myself in doing
                    some harder LeetCode questions too!
                </p>
            </div>
        </div>
    )
}

export default aboutContent
