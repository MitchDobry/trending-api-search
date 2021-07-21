import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import languagesReducer from './languages'
import userSettingsReducer from './userSettings'
import repositoriesReducer from './repositories'

const rootReducer = combineReducers({
  languages: languagesReducer,
  repositories: repositoriesReducer,
  userSettings: persistReducer({ key: 'userSettings', storage }, userSettingsReducer),
})

export default rootReducer
