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

        case 'FETCH_ENTRIES':
            return {
                ...state,
                allEntries: [action.entries]
            }

        default:
        return state;
    }

}
  
export default entryReducer;