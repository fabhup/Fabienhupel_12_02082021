import axios from "axios";
import { URL_API, ROUTES_API } from "../constants/routesAPI";
import { getUserDataFromMock } from "../__mocks__/data";

/**
 * @const {boolean} activeMock - boolean to pass to mock mode if true or API mode if false
 */
const activeMock = false;

/** Class representing API methods */
class API {
  /** method for get the data with getUserDataFromAPI or getUserDataFromMock
   * @param {number} userID - An integer representing the id of current user
   * @param {string} typeOfData - A string representing the type of data to get
   * @return {Promise} Promise object represents the data to get for the user
   */
  getUserData = (userID, typeOfData) => {
    return !activeMock
      ? this.getUserDataFromAPI(userID, typeOfData)
      : getUserDataFromMock(userID, typeOfData);
  };

  /** method for get the data with the API of the backend
   * @param {number} userID - An integer representing the id of current user
   * @param {string} typeOfData - A string representing the type of data to get
   * @const {string} userDataURL - A string containing full URL for API call 
   * @return {Promise} Promise object represents the data to get for the user
   */
  getUserDataFromAPI = (userID, typeOfData) => {
    const userDataURL = URL_API + ROUTES_API(userID)[typeOfData];
    return axios
      .get(userDataURL)
      .then((response) => response.data.data)
      .catch((error) => {
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
      });
  };
}

export default new API();
