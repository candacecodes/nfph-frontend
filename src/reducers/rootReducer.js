import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer';
import patientReducer from './patientReducer';
import entryReducer from './entryReducer';
import providerReducer from './providerReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    patient: patientReducer,
    organizations: organizationReducer,
    entryReducer: entryReducer,
    provider: providerReducer,
    comments: commentReducer,
});

export default rootReducer;
