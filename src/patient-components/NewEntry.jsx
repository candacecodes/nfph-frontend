import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

// Change header to say new entry or update entry based on what the user is doing
// Need to fetch the entry details using the id which will be passed from the view all entries page

const NewEntry = () => {
  
  const history = useHistory();

  const redirect = (event) => {
    history.push('/patient/dashboard');
  }

  const [date, setDate] = useState('');
  const [issue, setIssue] = useState('');
  // const [provider, setProvider] = useState('');
  const [location, setLocation] = useState('');
  const [painLevel, setPainLevel] = useState('');
  const [comments, setComments] = useState('');

  const submitForm = (event) => {

    event.preventDefault();

    let data = {
      patient_id: 1,
      date_of_entry: new Date(),
      symptom_onset: event.target.date.value,
      issue: event.target.issue.value,
      image: ' ',
      location: event.target.location.value,
      pain_level: event.target.painLevel.value,
      symptoms: event.target.comments.value
    }

    fetch('http://localhost:3000/entries',{
      method:"POST",
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(response => response.json())

    redirect(event);

  }

  return (

    <Card className="card">

      <CardTitle className="bg-light border-bottom p-3 mb-0">
        <i className="mdi mdi-comment-processing-outline mr-2"> </i>
        Create a New Entry
      </CardTitle>

      <CardBody className="card-body">
        <form onSubmit={(event) => submitForm(event)} >

          <h4 className="col-form-label-lg">Date</h4>
          <h6 className="card-subtitle">Select the date on which the symptom occurred:</h6>
          <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}/>

          <br></br>
          <br></br>

          <h4 className="col-form-label-lg">Issue</h4>
          <h6 className="card-subtitle">What type of issue is this?</h6>
          <input className="form-control-lg" type="text" name="issue" value={issue} onChange={(event) => setIssue(event.target.value)}/>

          <br></br>
          <br></br>

          {/* <h4 className="col-form-label-lg">Provider</h4>
          <h6 className="card-subtitle">Select your provider:</h6>
          <input className="form-control-lg" type="text" name="provider" value={provider} onChange={(event) => setProvider(event.target.value)}/>

          <br></br>
          <br></br> */}

          <h4 className="col-form-label-lg">Location</h4>
          <h6 className="card-subtitle">Which part of the body does this symptom relate to?</h6>
          <input className="form-control-lg" type="text" name="location" value={location} onChange={(event) => setLocation(event.target.value)}/>

          <br></br>
          <br></br>

          <h4 className="col-form-label-lg">Pain Level</h4>
          <h6 className="card-subtitle">Select a pain level between 1 and 5:</h6>
          <input className="form-control-lg" type="number" min="1" max="5" name="painLevel" value={painLevel} onChange={(event) => setPainLevel(event.target.value)}/>

          <br></br>
          <br></br>

          <h4 className="col-form-label-lg">Comments</h4>
          <h6 className="card-subtitle">Enter any additional information you have about this symptom:</h6>
          <input className="form-control-lg" type="text" name="comments" value={comments} onChange={(event) => setComments(event.target.value)}/>

          <br></br>
          <br></br>
          <br></br>

          <input className="btn btn btn-primary btn-lg" type="submit" value="Create New Entry" />

        </form>
      </CardBody>

    </Card>

  );
};
export default NewEntry;