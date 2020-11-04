import React from 'react';
import { useHistory } from 'react-router-dom';
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

const ViewEntries = () => {

  const history = useHistory();

  const redirect = (event) => {
    history.push('/patient/newentry');
  }

  return (
    <div>
      <h4 className="mb-3">All Entries</h4>
      <Row>
        <Col>
          <Card outline color="danger" className="border">
            <CardHeader>Date of entry</CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <CardText>
                <small className="text-muted">3 comments</small>
              </CardText>
              <Button id="changeThis1">View Comments</Button>
              <Button onClick={(event => redirect(event))}>Edit Entry</Button>
              <UncontrolledCollapse toggler="#changeThis1">
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
      <Row>
        <Col>
          <Card outline color="success" className="border">
            <CardHeader>Date of entry</CardHeader>
            <CardBody>
              <CardTitle>Thoughts</CardTitle>
              <CardText>
                - Card can be outlined, depending on severity?<br></br>
                - If 0 comments, toggle view comment button to Add comment?<br></br>
                - 1 comment vs 2 comments<br></br>
                - images displayed aligned right with submitted pics
              </CardText>
              <CardText>
                <small className="text-muted">0 comments</small>
              </CardText>
              <Button id="changeThis2">View Comments</Button>
              <Button onClick={(event => redirect(event))}>Edit Entry</Button>
              <UncontrolledCollapse toggler="#changeThis2">
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
      <Row>
        <Col>
          <Card outline color="warning" className="border">
            <CardHeader>Date of entry</CardHeader>
            <CardBody>
              <CardTitle>Note to self</CardTitle>
              <CardText>Make comment isOpen card specific</CardText>
              <CardText>
                <small className="text-muted">1 comment</small>
              </CardText>
              <Button id="changeThis3">View Comments</Button>
              <Button onClick={(event => redirect(event))}>Edit Entry</Button>
              <UncontrolledCollapse toggler="#changeThis3">
                <Card>
                  <CardBody>
                    <CardTitle>November 2, 2020</CardTitle>
                    <CardText>JK fixed it via uncontrolled collapse</CardText>
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

    </div>
  );
}

export default ViewEntries;


