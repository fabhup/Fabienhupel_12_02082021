
# SportSee Project

## General information

This project is the frontend of **SportSee Project**.\
It has been developed by **Fabien HUPEL** for **OpenClassrooms FrontEnd Degree.**

The SportSee FrontEnd Project has to used the SportSee Backend Project so you have to forked it from here :\
`https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard`

## Prerequisites

- [NodeJS (**version 12.18 or greater**)](https://nodejs.org/en/)
- [**Install the SportSee Backend Project**](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
   >- Fork the repository and clone it on your computer.
   >- Open the backend project and run the command `npm install` (or `yarn`) in a new terminal to install all the dependencies. 
   >- Run the backend with `npm start` (or `yarn dev`).
   >- The message *"Magic happens on port **3000**"* is normally displayed on the terminal (if you see another port, keep it in mind for specified it after the front end install).
   >- Go to [http://localhost:3000/user/12](http://localhost:3000/user/12) to check that backend is active 

## Install the SportSee FrontEnd
- Fork this repository and clone it on your computer (in a new repository).
- Open the front end project and run the command `npm install` in a new terminal to install all the dependencies. 
- If the backend is not active, launch it
- **Only if the backend is launched on a port other than 3000** :
    >- Open the file **/src/constants/routesAPI.js**
    >- Replace the 3000 port in URL_API by the active port :  
    >`const URL_API = 'http://localhost:newport'` 
- Run the frontend with `npm start` (or `yarn dev`)
- If you have this message in your terminal :

    >- `Something is already running on port 3000.`\
    >`Would you like to run the app on another port instead? › (Y/n)`

  Press `Y` to run the frontEnd on another port than the backend (it will be probably launched on port 3001)
- Open [http://localhost:3001](http://localhost:3001) to view the frontend in the browser.
- The page will reload if you make edits.

## See the dashboard of another userID

- Open the file **/src/components/App.js** and replace the current USER_ID value by another USER_ID.
    >`const USER_ID = 18`
- Find an existing USER_ID in the backend project (in the file **/app/data.js**)
- If you specified an **unknown USER_ID**, you will be directed to the **ErrorPage** (cf. **/src/components/App.js**)

## Running the frontEnd without backend (with mock Data)
- For development it's possible to run the project without the backend 
- You can easily switch from backend calls to mockDATA calls for testing : 
    >-  Just open the file **/src/api/API.js**
    >-  Set `const activeMock` to `true` and API.getUserData will be set to getUserDataFromMock\
        You can see the data used for mock method in the file **/src/__mocks__/data.js**
    >-  Set `const activeMock` to `false` to reset API.getUserData to getUserDataFromAPI

