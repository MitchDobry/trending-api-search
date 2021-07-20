import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { persistStore } from 'redux-persist'

const store =
createStore(rootReducer, compose(applyMiddleware(logger, thunk)))

export default store
export const persistor = persistStore(store)