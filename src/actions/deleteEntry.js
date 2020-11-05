export const deleteEntry = (event) => {

    let id = event.target.value;

    return (dispatch) => {
        fetch(`http://localhost:3000/entries/${id}`, {
            method:'DELETE'
        })
        .then(json => {
            if (!json.error) {
                dispatch({ type: 'DELETE_ENTRY', entryId: id })
            } else {
                alert(json.error)
            }
        })
    }

}