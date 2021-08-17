
export const URL_API = 'http://localhost:3000'
export const ROUTES_API = (userID) => {
    return {
      MainData: '/user/' + userID,
      Performance: '/user/' + userID + '/performance',
      Activity : '/user/' + userID + '/activity',
      Sessions: '/user/' + userID + '/average-sessions'
    }
  }
