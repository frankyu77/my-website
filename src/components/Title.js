import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"
import './Title.css'

function Title() {
  return (
    <>
        <div className="title-container">
            <div className="title">
                <h1 className="name">Frank Yu</h1>
            </div>
            <div className="intro-container">
                <p className="intro">Welcome to my website! Check out some of the things I made.</p>
            </div>
            
            <AiOutlineCaretDown></AiOutlineCaretDown>
            <AiOutlineCaretUp></AiOutlineCaretUp>
        </div>
    </>
  )
}

export default Title