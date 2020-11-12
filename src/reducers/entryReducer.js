const initialState = {
    allEntries: [],
    editEntryMode: false,
    currentEntry: 0
}

const entryReducer = (state=initialState,action) => {

    switch (action.type) {

        case 'POST_ENTRY':
            return {
                ...state,
                allEntries: [state.allEntries.concat(action.entry)],
                editEntryMode: false,
                currentEntry: 0
            }

        case 'PATCH_ENTRY':

            let updatedEntries = state.allEntries[0].filter (entry => entry.id !== action.entryId)

            return {
                ...state,
                allEntries: [updatedEntries.concat(action.entry)],
                editEntryMode: false,
                currentEntry: 0
            }

        case 'FETCH_ENTRIES':
            return {
                ...state,
                allEntries: [action.entries],
                editEntryMode: false,
                currentEntry: 0
            }

        case 'DELETE_ENTRY':

            let remainingEntries = state.allEntries[0].filter (entry => entry.id !== action.entryId)

            return {
                ...state,
                allEntries: [remainingEntries],
                editEntryMode: false,
                currentEntry: 0
            }

        case 'ENTER_EDIT_ENTRY_MODE':
            
            return {
                ...state,
                allEntries: [...state.allEntries],
                editEntryMode: true,
                currentEntry: action.entryId
            }

        default:
        return state;
    }

}
  
export default entryReducer;