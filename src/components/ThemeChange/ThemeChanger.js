import React, { createContext, useContext, useState } from 'react';
import { FaCog } from 'react-icons/fa';
import './ThemeChanger.css'; // Import your CSS file for styling
import styled, { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import DarkMode from '../DarkMode/DarkMode'
// Define your theme colors
const lightTheme = {
    background: '#ffffff',
    text: '#000000',
};

const darkTheme = {
    background: '#2c3e50',
    text: '#ffffff',
};

// Create a context for the theme
const ThemeContext = createContext();

// Global styles to apply theme-specific colors to the entire app
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for theme change */
  }
`;

// ThemeProvider component to manage the theme state
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

// ThemedComponent to consume the theme context and display themed content
const ThemedComponent = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <Container>
            <DarkMode onClick={toggleTheme}>Toggle Theme</DarkMode>
        </Container>
    );
};

// Styled components for better readability and dynamic theming
const Container = styled.div`
    padding: 20px;
    text-align: center;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px;
    cursor: pointer;
`;

const ThemeChanger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={`theme-changer ${isOpen ? 'open' : ''}`}>
        
            <div style={{ marginLeft: isOpen ? "10px" : "0px" }} className="bars-theme" >
                <FaCog onClick={toggleMenu}/>
            </div>
            <div >
                <div style={{ width: isOpen ? "200px" : "0px" }} className='sidebar-theme'>
                    <ThemeProvider>
                        <ThemedComponent />
                    </ThemeProvider>
                </div>
                <div onClick={closeMenu}></div>
            </div>
        </div>
    );
};

export default ThemeChanger;
