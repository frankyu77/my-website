import React, { useState, useEffect } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Dropdown.css'

function Dropdown() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const collapseElements = document.querySelectorAll('.collapse');
        collapseElements.forEach((element) => {
            new bootstrap.Collapse(element, { toggle: false });
        });

        const toggleButtons = document.querySelectorAll('[data-toggle="collapse"]');
        toggleButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const targetElement = document.querySelector(targetId);
                const collapseInstance = bootstrap.Collapse.getInstance(targetElement);

                if (collapseInstance) {
                    setIsCollapsed(!isCollapsed);
                    collapseInstance.toggle();
                }
            });
        });
    }, [isCollapsed]);

    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Collapsible Group Item #1
                            <i className={`icon ${isCollapsed ? 'rotated' : ''}`}>
                                {isCollapsed ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                            </i>
                            
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        Content for collapsible item #1
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Collapsible Group Item #2
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        Content for collapsible item #2
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Collapsible Group Item #3
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        Content for collapsible item #3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
