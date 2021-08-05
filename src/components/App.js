import { HashRouter as Router } from "react-router-dom";
import Banner from './Banner';
import SideBar from './SideBar';
import Home from '../pages/Home';

import '../styles/App.css';
import API from '../api/API'
import React, { useState, useEffect } from 'react';

function App() {
  // function getUserPerformance(userid) {
  //   return fetch("http://localhost:3000/user/"+userid+"/performance")
  //     .then(response => response.data())
  // }
  // async function getUser() {
  //   try {
  //     const response = await axios.get('http://localhost:3000/user/12');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // function getUser() {
  //   return axios.get('http://localhost:3000/user/12');
  // }
  const [userData, setUserData] = useState(null);

  useEffect(() => { 
    API.getUser({userID:"12",setUserData: setUserData});
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
