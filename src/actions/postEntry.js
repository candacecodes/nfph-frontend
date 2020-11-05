export const postEntry = (event) => {

    let data = {
        patient_id: 1,
        date_of_entry: new Date(),
        symptom_onset: event.target.date.value,
        issue: event.target.issue.value,
        image: "",
        location: event.target.location.value,
        pain_level: event.target.painLevel.value,
        symptoms: event.target.comments.value
    }

    return (dispatch) => {
        fetch('http://localhost:3000/entries',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'POST_ENTRY', entry: responseJSON })
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('postEntry error:', err))
    }

}