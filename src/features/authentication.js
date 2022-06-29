import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'void',
    user: {
        username: null, 
        token: null
    },
    error: null,
  }

export async function login(dispatch, getState) {
    const status = selectFreelances(getState()).status
    if (status === 'pending' || status ==='updating') {
        return;
    }
    dispatch(actions.fetching())
    try {
        const response = await fetch('http://localhost:8000/freelances');
        if (response.status === 200) {
            const data = await response.json()
            dispatch(actions.resolved(data))
        }
        else {
            const error = await response.json()
            dispatch(actions.rejected(error))
        }


        )
    }
    catch (error) {
        if data ? 
        dispatch(actions.rejected(data))
    }
}

const { actions, reducer } = createSlice({
  name: 'authentication',
  initialState: {},
  reducers: {
    pending: (draft, action) => {
      draft[action.payload.toke,n,] = action.payload.answer
    },
  },
})

export const { saveAnswer } = actions

export default reducer