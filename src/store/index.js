import { applyMiddleware, createStore } from 'redux'
import dataReducer from "./reducer/dataReducer";
import thunk from 'redux-thunk'

const store = createStore(dataReducer, applyMiddleware(thunk))

export default store;