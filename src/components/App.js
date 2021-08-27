import { HashRouter as Router } from "react-router-dom";
import Banner from "./Banner";
import SideBar from "./SideBar";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../pages/LoadingPage";
import "../styles/App.css";
import API from "../api/API";
import React, { useState, useEffect } from "react";
import {
  MainData,
  ActivityData,
  PerformanceData,
  SessionsData,
} from "../data/formattedData";
import axios from "axios";

// The constant userID should be replaced later by a getUserID when the LoginPage will be developed
const USER_ID = 18;
let userID = USER_ID;

function App() {
  // States for data getted from the API
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);

  // States for check Loading Status and if there is an Error on MainData
  const [isLoading, setIsLoading] = useState(true);
  const [isErrorOnMainData, setIsErrorOnMainData] = useState(false);

  // API calls will be runned only during the first render of App component
  // The data states will changed on a success call
  // If an error occurs on API.getUserData call for MainData, setIsErrorOnMainData is set to true
  // After axios.all statement, setIsErrorOnMainData is set to false

  useEffect(() => {
    axios
      .all([
        API.getUserData(userID, "MainData")
          .then((data) => setUserData(new MainData(data)))
          .catch(() => {
            setIsErrorOnMainData(true);
          }),
        API.getUserData(userID, "Activity")
          .then((data) => setActivityData(new ActivityData(data)))
          .catch((error) => console.log(error)),
        API.getUserData(userID, "Sessions")
          .then((data) => setSessionsData(new SessionsData(data)))
          .catch((error) => console.log(error)),
        API.getUserData(userID, "Performance")
          .then((data) => setPerformanceData(new PerformanceData(data)))
          .catch((error) => console.log(error)),
      ])
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Router>
      <Banner />
      <SideBar />
      {isLoading ? (
        <LoadingPage />
      ) : isErrorOnMainData ? (
        <ErrorPage />
      ) : (
        <Home
          userData={userData}
          activityData={activityData}
          performanceData={performanceData}
          sessionsData={sessionsData}
        />
      )}
    </Router>
  );
}

export default App;
