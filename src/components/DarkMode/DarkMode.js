import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import useDarkMode from 'use-dark-mode'; 
const DarkMode = () => {
    const darkModes = useDarkMode(false);
    return (
        <div className={darkModes ? 'dark-mode' : 'light-mode'}>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={darkModes.value} onChange={darkModes.toggle} 
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                
            </label>
        </div>
    );
};

export default DarkMode;
