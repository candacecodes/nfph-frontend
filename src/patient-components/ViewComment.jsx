import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const ViewComment = () => {

  // const comments = useSelector(state => state.commentReducer.comments)
  return (
    <div>
    <Card>
      <CardBody>
        <CardTitle>July 15, 2020 </CardTitle>
        <CardText>A friend started noticing this mole looked weird.</CardText>
      </CardBody>
    </Card>
    </div>
  )
}

export default ViewComment;

const NewComment = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleText">Add Comment</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
    </Form>
  )
}

