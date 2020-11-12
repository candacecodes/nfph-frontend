const initialState = {
    allEntries: [],
    editEntryMode: false,
    currentEntry: "",
    currentEntry: {}
}

const entryReducer = (state=initialState,action) => {

    switch (action.type) {

        case 'POST_ENTRY':
            return {
                ...state,
                allEntries: [state.allEntries.concat(action.entry)],
                editEntryMode: false,
                currentEntryId: "",
                currentEntry: {}
            }

        case 'PATCH_ENTRY':

            let updatedEntries = state.allEntries[0].filter (entry => entry.id !== action.entryId)

            return {
                ...state,
                allEntries: [updatedEntries.concat(action.entry)],
                editEntryMode: false,
                currentEntryId: "",
                currentEntry: {}
            }

            case 'FETCH_ENTRY':

                let date = action.entry.date_of_entry.slice(0,10)

                return {
                    ...state,
                    allEntries: [...state.allEntries],
                    editEntryMode: state.editEntryMode,
                    currentEntryId: state.currentEntryId,
                    currentEntry: {
                        entry: action.entry,
                        date: date,
                        issue: action.entry.issue,
                        painLevel: action.entry.pain_level,
                        location: action.entry.location,
                        comments: action.entry.symptoms
                    }
                }
        
            case 'FETCH_ENTRIES':
            return {
                ...state,
                allEntries: [action.entries],
                editEntryMode: false,
                currentEntryId: "",
                currentEntry: {}
            }

        case 'DELETE_ENTRY':

            let remainingEntries = state.allEntries[0].filter (entry => entry.id !== action.entryId)

            return {
                ...state,
                allEntries: [remainingEntries],
                editEntryMode: false,
                currentEntryId: "",
                currentEntry: {}
            }

        case 'ENTER_EDIT_ENTRY_MODE':
            
            return {
                ...state,
                allEntries: [...state.allEntries],
                editEntryMode: true,
                currentEntryId: action.entryId,
                currentEntry: {}
            }

        default:
        return state;
    }

}
  
export default entryReducer;