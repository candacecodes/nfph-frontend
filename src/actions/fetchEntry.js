export const fetchEntry = (currentEntry) => {

    return (dispatch) => {

        fetch(`http://localhost:3000/entries/${currentEntry}`)
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'FETCH_ENTRY', entry: responseJSON })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('fetchEntry error:', err))

    }

}