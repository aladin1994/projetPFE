
import {combineReducers} from "redux"
import UserReducer from "./UserReducer"
import ArticleReducer from "./ArticleReducer"
import FactureReducer from './FactureReducer'

const rootreducer=combineReducers({UserReducer,ArticleReducer,FactureReducer})

export default rootreducer