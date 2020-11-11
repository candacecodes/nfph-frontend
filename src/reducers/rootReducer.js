import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer';
import patientReducer from './patientReducer';
import entryReducer from './entryReducer';

const rootReducer = combineReducers({
    patient: patientReducer,
    organizations: organizationReducer,
    entryReducer: entryReducer,
})

export default rootReducer
