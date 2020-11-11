<<<<<<< HEAD
import { combineReducers } from "redux";
import entryReducer from './entryReducer';

const rootReducer = combineReducers({
    entryReducer: entryReducer,
})

export default rootReducer;
=======
import { combineReducers } from 'redux';
import organizationReducer from './organizationReducer';
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
    patient: patientReducer,
    organizations: organizationReducer
})

export default rootReducer
>>>>>>> 9972dc34570d4ba91c81f7c549a143006a86a73b
