import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownItem from './DropdownItem.jsx';
import './Dropdown.css'
import AboutContent from './content/AboutContent.js';

function Dropdown() {
    const [collapsedStates, setCollapsedStates] = useState({});

    const handleToggle = (id) => {
        setCollapsedStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const items = [
        { id: 1, heading: 'About', ContentComponent: AboutContent }
        // { id: 2, heading: 'Education', content: 'The University of British Columbia'},
        // { id: 3, heading: 'Experience', content: 'TESTING EXPERIENCE'}
    ];

    useState(() => {
        const initialCollapsedStates = {};
        items.forEach(item => {
            initialCollapsedStates[item.id] = true;
        });
        setCollapsedStates(initialCollapsedStates);
    }, []);

    return (
        <div class="panel-group" id='myaccordian'>
            {items.map (item => (
                <DropdownItem 
                    key={item.id}
                    id={item.id}
                    heading={item.heading}
                    ContentComponent={item.ContentComponent}
                    isCollapsed={collapsedStates[item.id]}
                    handleToggle={handleToggle}
                />
            ))}

        </div>
    );
}

export default Dropdown;
