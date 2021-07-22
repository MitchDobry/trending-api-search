import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_ENDPOINT, XHR_STATUS_IDLE, XHR_STATUS_PENDING, XHR_STATUS_REJECTED, XHR_STATUS_FULFILLED } from '../consts'

export const fetchAllRepositories = createAsyncThunk(
  'repository',
  async (obj) => {
      const params = Object.keys(obj)
        .filter((key) => (obj[key]))
        .map((key) => (`${key}=${obj[key]}`))
        .join('&')
      const response = await fetch(API_ENDPOINT + '?' + params )
      return response.json()
  }
)

const slice = createSlice({
  name: 'repositories',
  initialState: {
    status: XHR_STATUS_IDLE,
    errors: null,
    entities: []
  },
  reducers: {},
  extraReducers: {
    [fetchAllRepositories.pending]: (state, action) => {
      state.status = XHR_STATUS_PENDING
    },
    [fetchAllRepositories.rejected]: (state, action) => {
      state.status = XHR_STATUS_REJECTED
      state.errors = action.payload
    },
    [fetchAllRepositories.fulfilled]: (state, action) => {
      state.status = XHR_STATUS_FULFILLED
      state.entities = action.payload
    }
  }
})

export default slice.reducer
