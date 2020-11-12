export const patchEntry = (event, currentEntry) => {

    let data = {
        patient_id: 1,
        date_of_entry: event.target.date.value,
        symptom_onset: event.target.date.value,
        issue: event.target.issue.value,
        image: "",
        location: event.target.location.value,
        pain_level: event.target.painLevel.value,
        symptoms: event.target.comments.value
    }

    return (dispatch) => {
        fetch(`http://localhost:3000/entries/${currentEntry}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'PATCH_ENTRY', entry: responseJSON })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('patchEntry error:', err))
    }

}