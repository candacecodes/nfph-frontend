import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { fetchEntries } from "../actions/fetchEntries";
import { deleteEntry } from "../actions/deleteEntry";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledCollapse
} from 'reactstrap';
import { enterEditEntryMode } from "../actions/enterEditEntryMode";

const ViewEntries = () => {

  const allEntries = useSelector(state => state.entryReducer.allEntries[0])

  // Fetches all entries when the user goes to view all entries

  useEffect(() => {
      fetchAllEntries();
  }, []);

  const dispatch = useDispatch();

  const fetchAllEntries = () => {
      dispatch(fetchEntries());
  }

  const deleteOneEntry = (event) => {
      dispatch(deleteEntry(event));
      window.location.reload(false);
  }

  const editEntry = (event) => {
    dispatch(enterEditEntryMode(event));
    redirect();
  }

  
  // Formats Date

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const getDate = (date) => {

    let year;
    let month;
    let day;

    if (date) {
        year = date.slice(0, 4);
        month = monthNames[date.slice(5, 7) - 1];
        day = date.slice(8, 10)
    }

    return `${month} ${day}, ${year}`

  }


  // Creates entry cards from allEntries

  const createEntryCards = () => {

      return allEntries.map(entry => {
        const entryToggler = 'comment' + entry.id
        return (
          <Row>
            <Col>
              <Card outline color="danger" className="border" key={entry.id}>
                <CardHeader>{getDate(entry.date_of_entry)}</CardHeader>
                <CardBody>
                  <CardTitle>Issue</CardTitle>
                  <CardText>{entry.issue}</CardText>
                  <CardTitle>Location</CardTitle>
                  <CardText>{entry.location}</CardText>
                  <CardTitle>Pain Level</CardTitle>
                  <CardText>{entry.pain_level}</CardText>
                  <CardTitle>Symptoms</CardTitle>
                  <CardText>{entry.symptoms}</CardText>
                  <CardText>
                    <small className="text-muted">2 comments</small>
                  </CardText>
                  <Button id={entryToggler}>View Comments</Button>
                  <Button value={entry.id} onClick={(event => editEntry(event))} >Edit Entry</Button>
                  <Button value={entry.id} onClick={(event => deleteOneEntry(event))}>Delete Entry</Button>
                  <UncontrolledCollapse toggler={entryToggler}>
                    <Card>
                      <CardBody>
                        <CardTitle>July 15, 2020</CardTitle>
                        <CardText>A friend started noticing this mole looked weird.</CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <CardTitle>September 20, 2020</CardTitle>
                        <CardText>Mole start itching today</CardText>
                      </CardBody>
                    </Card>
                    <Form>
                      <FormGroup>
                        <Label for="exampleText">Add Comment</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                      </FormGroup>
                    </Form>
                  </UncontrolledCollapse>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        )
      })
    

  }


  // Takes user to new entry page when they click edit entry

  const history = useHistory();

  const redirect = () => {
    history.push('/patient/newentry');
  }

  return (

    <div>
      <h4 className="mb-3">All Entries</h4>
      {allEntries ? createEntryCards() : null}
    </div>

  );
}

export default ViewEntries;