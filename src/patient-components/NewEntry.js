import React, {useState} from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

const NewEntry = () => {

  const [date, entryType, provider, bodyPart, comments] = useState('');

  return (

    <div className="card">

      <CardTitle className="bg-light border-bottom p-3 mb-0">
        <i className="mdi mdi-comment-processing-outline mr-2"> </i>
        New Entry
      </CardTitle>

      <CardBody className="card-body">
        <form >

          <h4 className="col-form-label-lg">Date</h4>
          <h6 className="card-subtitle">Select the date on which the symptom occurred:</h6>
          <input type="date" name="date" value={date} onChange={date}/>
          <br></br>
          <br></br>
          <h4 className="col-form-label-lg">Type of Entry</h4>
          <h6 className="card-subtitle">What type of entry is this?</h6>
          <input className="form-control-lg" type="text" name="entryType" value={entryType} onChange={entryType}/>
          <br></br>
          <br></br>
          <h4 className="col-form-label-lg">Provider</h4>
          <h6 className="card-subtitle">Select your provider:</h6>
          <input className="form-control-lg" type="text" name="provider" value={provider} onChange={provider}/>
          <br></br>
          <br></br>
          <h4 className="col-form-label-lg">Body Part</h4>
          <h6 className="card-subtitle">Which part of the body does this symptom relate to?</h6>
          <input className="form-control-lg" type="text" name="bodyPart" value={bodyPart} onChange={bodyPart}/>
          <br></br>
          <br></br>
          <h4 className="col-form-label-lg">Comments</h4>
          <h6 className="card-subtitle">Please add any additional information:</h6>
          <input className="form-control-lg" type="text" name="comments" value={comments} onChange={comments}/>
          <br></br>
          <br></br>
          <br></br>
          <input className="btn btn btn-primary btn-lg" type="submit" value="Confirm" />

        </form>
      </CardBody>

    </div>

  );
};
export default NewEntry;