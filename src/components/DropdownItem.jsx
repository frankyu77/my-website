import React, { useRef, useEffect, useState } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropdownItem.css';

const DropdownItem = ({ id, heading, ContentComponent, isCollapsed, handleToggle }) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            if (!isCollapsed) {
                setMaxHeight(`${contentRef.current.scrollHeight}px`);
                setOpacity(1);
            } else {
                setMaxHeight(`${contentRef.current.scrollHeight}px`);
                setOpacity(0);
                setTimeout(() => {
                    setMaxHeight('0px');
                }, 10);
            }
        }
    }, [isCollapsed]);

    return (
        <div className='card'>
            <div className="card-header" id={`heading${id}`}>
                <h5 className="mb-0">
                    <button
                        className="btn collapsed"
                        aria-expanded={!isCollapsed}
                        aria-controls={`collapse${id}`}
                        onClick={() => handleToggle(id)}
                    >
                        {heading}
                        <i className={`icon ${id} ${isCollapsed ? '' : 'rotated'}`}>
                            <AiOutlineCaretDown />
                        </i>
                    </button>
                </h5>
            </div>
            <div
                id={`collapse${id}`}
                className={`collapse ${isCollapsed ? '' : 'show'}`}
                aria-labelledby={`heading${id}`}
                style={{ 
                    maxHeight: maxHeight,
                    opacity: opacity,
                    transition: 'max-height 1s ease-in-out, opacity 1s ease-in-out' }}

                // style={{ maxHeight }, {transition: max-height 1.5s}}
                ref={contentRef}
            >
                <div className="card-body">
                    <ContentComponent />
                </div>
            </div>
        </div>
    );
};

export default DropdownItem;
