import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { getComments } from "../actions/commentActions";

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

const ViewComment = ({entryId}) => {

  const comments = useSelector(state => state.comments.comments)

  console.log('comments?', comments)

  return comments.map(comment => {r
    return (
      <div>
      <Card key={comment.id}>
        <CardBody>
          <CardTitle>July 15, 2020 {comment.text}</CardTitle>
          <CardText>A friend started noticing this mole looked weird.</CardText>
        </CardBody>
      </Card>
      </div>
    )
  })
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

