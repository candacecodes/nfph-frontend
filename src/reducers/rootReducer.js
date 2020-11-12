import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer';
import patientReducer from './patientReducer';
import entryReducer from './entryReducer';
import providerReducer from './providerReducer';

const rootReducer = combineReducers({
    patient: patientReducer,
    organizations: organizationReducer,
    entryReducer: entryReducer,
    provider: providerReducer,
})

export default rootReducer
