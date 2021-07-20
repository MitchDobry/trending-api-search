import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_ENDPOINT, XHR_STATUS_IDLE, XHR_STATUS_PENDING, XHR_STATUS_REJECTED, XHR_STATUS_FULFILLED } from '../consts'

export const fetchAllLanguages = createAsyncThunk(
  'language',
  async () => {
    try {
      const response = await fetch(API_ENDPOINT + '/languages')
      return response.json()
    } catch (error) {
      return error
    }
  }
)

const slice = createSlice({
  name: 'languages',
  initialState: {
    status: XHR_STATUS_IDLE,
    errors: null,
    entities: []
  },
  reducers: {},
  extraReducers: {
    [fetchAllLanguages.pending]: (state, action) => {
      state.status = XHR_STATUS_PENDING
    },
    [fetchAllLanguages.rejected]: (state, action) => {
      state.status = XHR_STATUS_REJECTED
      state.errors = action.payload
    },
    [fetchAllLanguages.fulfilled]: (state, action) => {
      state.status = XHR_STATUS_FULFILLED
      state.entities = action.payload
    }
  }
})

export default slice.reducer
