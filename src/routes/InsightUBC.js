import React from 'react';
import './InsightUBC.css';
import insightAdd from '../images/insight-add.png';
import insightAddSuccess from '../images/insight-add-success.png';
import insightRemove from '../images/insight-remove-list.png';
import insightList from '../images/insight-list-remove.png';
import insightBar from '../images/insight-bar.png';
import insightPie from '../images/insight-pie.png';
import ImageSlider from '../components/ImageSlider';

import image1 from '../images/insight-1.png';
import image2 from '../images/insight-2.png';
import image3 from '../images/insight-3.png';
import image4 from '../images/insight-4.png';
import image5 from '../images/insight-5.png';
import image6 from '../images/insight-6.png';
import image7 from '../images/insight-7.png';
import image8 from '../images/insight-8.png';
import image9 from '../images/insight-9.png';

function InsightUBC() {
    const slides = [
        { url: insightAdd, title: "Add" },
        { url: insightAddSuccess, title: "Add Success" },
        { url: insightRemove, title: "Remove" },
        { url: insightList, title: "List" },
        { url: insightBar, title: "Bar Graph" },
        { url: insightPie, title: "Pie Graph" },
    ]

    return (
        <div>
            <div className='insight'>
                <div className="title-container">
                    <div className="title">
                        <h2 className="name">Insight UBC</h2>
                    </div>
                    <div className="description-container">
                        <h5>Project Overview</h5>
                        <p>
                            The UBC Insight project was aimed to create a
                            comprehensive RESTful API that facilitates the management and querying of various kinds of data related to UBC. The
                            backend was implemented using TypeScript, leveraging the Mocha and Chai testing frameworks to ensure robust black box,
                            unit, glass box, and integration testing. The project encompassed two main sources of information: data about UBC courses
                            and data about all buildings and rooms on campus.
                        </p>

                        <br />

                        <div className='slider-container'>
                            <ImageSlider slides={slides} />
                        </div>

                        <br />
                        <br />

                        <h5>Features</h5>
                        <p>
                            <strong>UBC Course Data:</strong>
                            <ul>
                                <li>
                                    <strong>Querying:</strong> Users can query detailed information about UBC courses, including section IDs, the number of available seats,
                                    the instructors teaching the courses, past year averages, etc. User is also able to filter information such as finding
                                    courses with averages above 90 from 2004 to 2008.
                                </li>
                                <li>
                                    <strong>Data management:</strong> The API allows for adding, removing, and listing course data, providing comprehensive management
                                    capabilities.
                                </li>
                                <li>
                                    <strong>Data display:</strong> Created graphs to display the data visually to the users
                                </li>
                            </ul>

                            <strong>UBC Buildings and Rooms Data:</strong>
                            <ul>
                                <li>
                                    <strong>Querying:</strong> Users can query detailed information about campus buildings and rooms, such as room capacity and precise location
                                    details (latitude and longitude).
                                </li>
                                <li>
                                    <strong>Data management:</strong> Similar to the course data, the API supports adding, removing, and listing building and room information.
                                </li>
                            </ul>
                        </p>

                        <br />

                        <h5>Technical Implementation</h5>
                        <p>
                            <strong>Backend Development</strong>
                            <ul>
                                <li>
                                    <strong>Language and Tools:</strong> Implemented in TypeScript with extensive use of promises and asynchronous code. Yarn was used as the package manager to
                                    streamline dependency management and scripts.
                                </li>
                                <li>
                                    <strong>Query Processing:</strong> Utilized a tree structure to implement query operators like WHERE, AND, and OR, enabling complex and efficient data querying.
                                </li>
                                <li>
                                    <strong>HTML and ZIP Processing:</strong> Used the tree adaptor functionalities from the Parse5 library to extract information from HTML files and the JSZip
                                    library to read zip files uploaded by users, enhancing the API's ability to handle various input formats.
                                </li>
                                <li>
                                    <strong>Testing Frameworks:</strong> Employed Mocha and Chai for comprehensive testing, including black box, unit, glass box, and integration tests. Created
                                    numerous JSON files to limit test the boundaries and functionality of the application.
                                </li>
                            </ul>

                            <strong>Frontend Development</strong>
                            <ul>
                                <li>
                                    <strong>Framework:</strong> Utilized React.js to build a user-friendly interface for interacting with the API.
                                </li>
                                <li>
                                    <strong>API Testing:</strong> Used Postman to test and validate the API endpoints thoroughly, including requests for POST, PUT, GET, and DELETE.
                                </li>
                            </ul>

                            <br />

                            <h5>Development Process</h5>
                            <p>
                                The project was a collaborative effort with a partner, and we adopted Agile methodologies, holding weekly SCRUM meetings to
                                track progress and address any issues promptly. This experience provided valuable insights into industry practices and the dynamics of
                                collaborative software development. Additionally, creating useful pull requests and multiple issues helped structure the project more
                                effectively, fostering better organization and communication within the team.
                            </p>

                            <br />

                            <h5>Challenges</h5>
                            <p>
                                The primary challenge encountered during this project was understanding and effectively using promises and asynchronous code in
                                TypeScript. Asynchronous programming can be complex, especially when managing multiple asynchronous operations and ensuring proper
                                error handling, but having the ability to work on this project for 4 months has helped me significantly improve my understanding of
                                asynchronous code.
                            </p>
                        </p>

                    </div>



                </div>
            </div>

            <div className='footer-slider'>
                <div className='footer-slide'>
                    <img src={image1} alt="insight-1" />
                    <img src={image2} alt="insight-2" />
                    <img src={image3} alt="insight-3" />
                    <img src={image4} alt="insight-4" />
                    <img src={image5} alt="insight-5" />
                    <img src={image6} alt="insight-6" />
                    <img src={image7} alt="insight-7" />
                    <img src={image8} alt="insight-8" />
                    <img src={image9} alt="insight-9" />
                </div>

                <div className='footer-slide'>
                    <img src={image1} alt="insight-1" />
                    <img src={image2} alt="insight-2" />
                    <img src={image3} alt="insight-3" />
                    <img src={image4} alt="insight-4" />
                    <img src={image5} alt="insight-5" />
                    <img src={image6} alt="insight-6" />
                    <img src={image7} alt="insight-7" />
                    <img src={image8} alt="insight-8" />
                    <img src={image9} alt="insight-9" />
                </div>
            </div>
        </div>

    );
}

export default InsightUBC