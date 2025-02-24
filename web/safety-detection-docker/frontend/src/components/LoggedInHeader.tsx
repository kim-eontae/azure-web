import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css'; // Import your CSS file
import axios from 'axios';

axios.defaults.withCredentials = true;  // 전역 설정 추가
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const LoggedInHeader = ({ setIsLoggedIn }: { setIsLoggedIn: (isLoggedIn: boolean) => void }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    try {
      await axios.post(`https://dockerwebs.azurewebsites.net/api/logout/`, {
      withCredentials: true,});
      setIsLoggedIn(false);
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <button onClick={handleLogout} className="nav-item">Logout</button>
      </nav>
    </header>
  );
};

export default LoggedInHeader;