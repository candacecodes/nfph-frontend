const initialState = {
    allEntries: []
}

const entryReducer = (state=initialState,action) => {

    switch (action.type) {

        case 'POST_ENTRY':
            return {
                ...state,
                allEntries: [state.allEntries.concat(action.entry)]
            }

        case 'FETCH_ENTRIES':
            return {
                ...state,
                allEntries: [action.entries]
            }

        case 'DELETE_ENTRY':

            let remainingEntries = state.allEntries[0].filter (entry => entry.id !== action.entryId)

            return {
                ...state,
                allEntries: [remainingEntries]
            }

        default:
        return state;
    }

}
  
export default entryReducer;