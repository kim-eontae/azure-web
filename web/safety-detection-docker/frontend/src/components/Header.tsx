import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoggedInHeader from './LoggedInHeader';
import LoggedOutHeader from './LoggedOutHeader';

axios.defaults.withCredentials = true;  // 전역 설정 추가
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 상태 확인
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`https://dockerwebs.azurewebsites.net/api/check_login/`);
        setIsLoggedIn(response.data.is_logged_in);
      } catch (error) {
        console.error('로그인 상태 확인 중 오류 발생:', error);
      }
    };

    checkLoginStatus();
  }, []);

  return isLoggedIn ? <LoggedInHeader setIsLoggedIn={setIsLoggedIn} /> : <LoggedOutHeader />;
};

export default Header;