import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer'

const rootReducer = combineReducers({
    organizations: organizationReducer
})

export default rootReducer