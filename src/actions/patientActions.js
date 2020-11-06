export function createPatientProfile(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_PATIENT_PROFILE'})
        fetch(`http://localhost:3000/patients`, {
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
                    localStorage.token = json.token
                    dispatch({type: 'PATIENT_LOGGED_IN', patient: json.patient, token: json.token})
                } else {
                    alert(json.error)
                }
            })
    }
}

export function patientLogin(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_PATIENT_PROFILE'})
        fetch(`http://localhost:3000/patient-login`, {
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
                    localStorage.token = json.token
                    dispatch({type: 'PATIENT_LOGGED_IN', patient: json.patient, token: json.token})
                } else {
                    alert(json.error)
                }
            })
    }
}

export function handlePersist(){
    return (dispatch) => {
        dispatch({type: 'LOADING_PATIENT_PROFILE'})
            fetch('http://localhost:3000/patient-persist',{
                headers: {
                "Authorization": `Bearer ${localStorage.token}`
                }
        })
        .then(res => res.json())
        .then(json => {
            localStorage.token = json.token
            dispatch({type: 'PATIENT_LOGGED_IN', patient: json.patient, token: json.token})
        })
    }
}