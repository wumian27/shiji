import {combineReducers} from 'redux'
import reducer from './reg/reducer'
import shou from './shou/reducer'
import header from './header/reducers'
export default combineReducers({
     login:reducer,
     shou,
     header
})