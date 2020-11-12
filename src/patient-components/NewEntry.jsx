import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { postEntry } from "../actions/postEntry";
import { patchEntry } from "../actions/patchEntry";
import { enterEditEntryMode } from "../actions/enterEditEntryMode";
import {
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

const NewEntry = () => {

  // Sets up state for controlled add/edit entry form

  const [date, setDate] = useState('');
  const [issue, setIssue] = useState('');
  const [location, setLocation] = useState('');
  const [painLevel, setPainLevel] = useState('');
  const [comments, setComments] = useState('');
  
  const editEntryMode = useSelector(state => state.entryReducer.editEntryMode)
  const currentEntry = useSelector(state => state.entryReducer.currentEntry)

  // Takes user to patient dashboard once their entry has been posted
  
  const history = useHistory();

  const redirect = (event) => {
    history.push('/patient/dashboard');
  }

  // Submits form

  const dispatch = useDispatch();

  const submitForm = (event) => {

    event.preventDefault();

    if (editEntryMode) {
      dispatch(patchEntry(event, currentEntry));
    } else {
      dispatch(postEntry(event));
    }

    redirect(event);

  }


  return (

    <Card className="card">

      <CardTitle className="bg-light border-bottom p-3 mb-0">
        <i className="mdi mdi-comment-processing-outline mr-2"> </i>
        {editEntryMode === false ? "Create a New Entry" : "Update Entry"}
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

          <input className="btn btn btn-primary btn-lg" type="submit" value={editEntryMode ? "Update Entry" : "Create New Entry"} />

        </form>
      </CardBody>

    </Card>

  );
};
export default NewEntry;