const initialState = {
    patientId: 1,
    dateOfEntry: new Date(),
    symptomOnset: "",
    issue: "",
    image: "",
    location: "",
    painLevel: 1,
    symptoms: ""
}

const entryReducer = (state=initialState,action) => {

    switch (action.type) {

        case 'POST_ENTRY':
            console.log(state)
            return {
                ...state
            }
        default:
        return state;
    }

}
  
export default entryReducer;