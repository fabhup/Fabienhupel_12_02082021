
/**
 * @const {string} URL_API - URL of API of the backend (default "http://localhost:3000") 
 */
export const URL_API = "http://localhost:3000";

/**
 * 
 * @param {number} userID - an integer representing the ID of user 
 * @return {Object} object with TypeOfData for keys and EndPoints API for values
 */
export const ROUTES_API = (userID) => {
  return {
    MainData: "/user/" + userID,
    Performance: "/user/" + userID + "/performance",
    Activity: "/user/" + userID + "/activity",
    Sessions: "/user/" + userID + "/average-sessions",
  };
};
