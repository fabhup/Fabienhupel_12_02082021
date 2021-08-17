import axios from 'axios';
import {URL_API, ROUTES_API} from '../constants/routesAPI'

class API {
    getUserData = ({userID, typeOfData}) => {
          const userDataURL = URL_API + ROUTES_API(userID)[typeOfData]
          return new Promise (
              (resolve,reject) => {
                  axios.get(userDataURL)
              .then((response) => {
                  const data = response.data.data
                  resolve(data)
              })
              .catch((error) => {
                  reject(error);
              })
            }
         )
        }
    }
export default new API()