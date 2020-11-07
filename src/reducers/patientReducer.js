export default function patientReducer(state = {}, action) {
    switch (action.type){
        case 'PATIENT_LOGGED_IN':
            return {patientInfo: action.patient, token: action.token}
        case 'UPDATED_PATIENT':
            return {patientInfo: action.patient}
        default:
            return state
    }
}