export const enterEditEntryMode = (event) => {

    let id = event.target.value;

    return (dispatch) => {

        dispatch({ type: 'ENTER_EDIT_ENTRY_MODE', entryId: id })

    }

}