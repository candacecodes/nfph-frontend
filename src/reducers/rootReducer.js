import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer';
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
    patient: patientReducer,
    organizations: organizationReducer
})

export default rootReducer