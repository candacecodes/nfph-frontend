export const fetchEntries = () => {

    return (dispatch) => {

        fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'FETCH_ENTRIES', entries: responseJSON })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('fetchEntries error:', err))

    }

}