import React, { useState, useEffect } from 'react';
import axios from 'axios';

class API {
    getUser = ({userID, setUserData}) => {
          axios.get('http://localhost:3000/user/12')
              .then((response) => {
                  const data = response.data.data
                  setUserData(data)
              })
              .catch((error) => {
                  console.log(error);
              })
         };

}

export default new API()