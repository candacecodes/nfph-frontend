const initialState = {
    allEntries: [],
    editEntryMode: false
}

const entryReducer = (state=initialState,action) => {

    switch (action.type) {

        case 'POST_ENTRY':
            return {
                ...state,
                allEntries: [state.allEntries.concat(action.entry)],
                editEntryMode: false
            }

        case 'PATCH_ENTRY':

            let updatedEntries = state.allEntries[0].filter (entry => entry.id !== action.entryId)

            return {
                ...state,
                allEntries: [updatedEntries.concat(action.entry)],
                editEntryMode: false
            }

        case 'FETCH_ENTRIES':
            return {
                ...state,
                allEntries: [action.entries],
                editEntryMode: false
            }

        case 'DELETE_ENTRY':

            let remainingEntries = state.allEntries[0].filter (entry => entry.id !== action.entryId)

            return {
                ...state,
                allEntries: [remainingEntries],
                editEntryMode: false
            }

        case 'ENTER_EDIT_ENTRY_MODE':

            return {
                ...state,
                allEntries: [...state.allEntries],
                editEntryMode: true
            }

        default:
        return state;
    }

}
  
export default entryReducer;