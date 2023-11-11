import React, { useState } from 'react';
import './LoginSignup.css';
import { Link, Navigate } from 'react-router-dom'; // Correct import
import Modal from 'react-modal';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import man_icon from '../Assets/manCar1.jpg'
const LoginSignup = () => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('password');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const authenticateUser = (enteredUsername, enteredPassword) => {
    const validUsername = 'user';
    const validPassword = 'password';

    return enteredUsername === validUsername && enteredPassword === validPassword;
  };

  const handleLogin = () => {
    if (authenticateUser(username, password)) {
      setLoggedIn(true);
      console.log("Login successful");
    } else {
      console.log('Invalid username or password');
      setModalIsOpen(true);
    }
  };

  return (
    <div className="login-page">
      <div className="container-log">
        <div className="container">
          <div className="left-side">
            <div className="header">
              <div style={{ width: '30rem', fontSize: '38px', paddingLeft:'20px' }} className="text">Welcome to Eber <br></br>Admin Panel</div>
              <img className="image" src={man_icon} alt="" />
              
            </div>
          </div>
          <div className="right-side">
          <div style={{ fontSize: '35px' }} className="text">EBER</div>
              <div className="underline"></div>
            <div className="inputs">
              <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} /> </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /></div>
            </div>
            <div className="forgot-password">
              forgot Password? <span>Click Here!</span>
            </div>
            <div className="submit-container">
              {isLoggedIn ? (
                <Link to="/dashboard"><div className="submit">Submit</div></Link>
              ) : (
                <>
                  <div className="submit" onClick={handleLogin}>Submit</div>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Invalid Login Modal"
                    style={{
                      content: {
                        width: '300px', // Set your desired width
                        height: '150px', // Set your desired height
                        margin: 'auto', // Center the modal
                      },
                    }}
                  >
                    <h2 style={{
                      paddingBottom: '50px'
                    }}>Invalid Username or Password</h2>
                    <button onClick={closeModal} >Close</button>
                  </Modal>
                </>
              )}
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default LoginSignup;
