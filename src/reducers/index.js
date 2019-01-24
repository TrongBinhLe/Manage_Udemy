import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployeeListReducer from './EmployeeListReducer'

export default combineReducers({
    auth : AuthReducer,
    createEmployee : EmployeeReducer,
    employees : EmployeeListReducer,
})