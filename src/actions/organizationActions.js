export function fetchAllOrganizations(){
    return (dispatch) => {
        dispatch({type: 'LOADING_ORGANIZATIONS'})
        fetch(`http://localhost:3000/organizations`)
            .then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch({type: 'FETCH_ORGANIZATIONS', organizations: json})
                } else {
                    alert(json.error)
                }
            })
    }
}