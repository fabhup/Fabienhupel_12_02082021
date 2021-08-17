import { HashRouter as Router } from "react-router-dom";
import Banner from './Banner';
import SideBar from './SideBar';
import Home from '../pages/Home';

import '../styles/App.css';
import API from '../api/API'
import React, { useState, useEffect } from 'react';

// the constant USER_ID should be replaced by a getUserID after LoginPage
const USER_ID = 18;

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => { 
    API.getUserData({userID:USER_ID, typeOfData:'MainData'})
      .then(data => setUserData(data))
      .catch(console.log("No data"));
    API.getUserData({userID:USER_ID,typeOfData:'Performance'})
      .then(data => console.log(data))
      .catch(console.log("No data"));
    API.getUserData({userID:USER_ID,typeOfData:'Activity'})
      .then(data => console.log(data))
      .catch(console.log("No data"));
    API.getUserData({userID:USER_ID,typeOfData:'Sessions'})
      .then(data => console.log(data))
      .catch(console.log("No data"));
  }, []);
  
  return userData ? (
    <Router>
      <Banner/>
      <SideBar/>
      <Home userData={userData}/>
    </Router>
  )
  : (
    <div>"ERROR 404"</div>
  )
}

export default App;
