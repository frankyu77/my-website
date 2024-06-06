import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import './Accordian.css'

function Accordian() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-item">
                <div className="dropdown-title"
                    onClick={() => setIsActive(!isActive)}>
                    <div>testing</div>
                    <div>{isActive ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}</div>
                </div>
                <div className={`dropdown-content ${isActive ? '' : 'open'}`}>
                    asldfjaslkfjhalsjkdfhalsjkhflaksjf
                </div>
            </div>
        </div>
    )
}

export default Accordian