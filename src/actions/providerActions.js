export function createProviderProfile(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROVIDER_PROFILE'})
        fetch(`http://localhost:3000/providers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                if (!json.error) {
                    localStorage.providerToken = json.token
                    dispatch({type: 'PROVIDER_LOGGED_IN', provider: json.provider, token: json.token})
                } else {
                    alert(json.error)
                }
            })
    }
}

export function providerLogin(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROVIDER_PROFILE'})
        fetch(`http://localhost:3000/provider-login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                if (!json.error) {
                    localStorage.providerToken = json.token
                    dispatch({type: 'PROVIDER_LOGGED_IN', provider: json.provider, token: json.token})
                } else {
                    alert(json.error)
                }
            })
    }
}

export function handleProviderPersist(){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROVIDER_PROFILE'})
            fetch('http://localhost:3000/provider-persist',{
                headers: {
                "Authorization": `Bearer ${localStorage.providerToken}`
                }
        })
        .then(res => res.json())
        .then(json => {
            localStorage.providerToken = json.token
            dispatch({type: 'PROVIDER_LOGGED_IN', provider: json.provider, token: json.token})
        })
    }
}

export function editProviderProfile(formData, id){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROVIDER_PROFILE'})
        fetch(`http://localhost:3000/providers/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch({type: 'UPDATED_PROVIDER', patient: json})
                } else {
                    alert(json.error)
                }
            })
    }
}

export function deleteProviderProfile(id){
    return (dispatch) => {
        dispatch({type: 'LOADING_PATIENT_PROFILE'})
        fetch(`http://localhost:3000/providers/${id}`, {
            method: 'DELETE'
        })
        .then(json => {
            if (!json.error) {
                dispatch({ type: 'DELETE_PROVIDER' })
            } else {
                alert(json.error)
            }
        })
    }
}