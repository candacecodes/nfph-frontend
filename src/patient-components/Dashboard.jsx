import React from "react";
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";

import calendar from "../assets/images/pictures/calendar.png";
import newEntry from "../assets/images/pictures/entry.png";
import profile from "../assets/images/pictures/profile.png";
import providers from "../assets/images/pictures/providers.png";
import stats from "../assets/images/pictures/stats.png";
import viewEntries from "../assets/images/pictures/view-entries.png";

const Dashboard = () => {

  const history = useHistory();

  const redirect = (event) => {
    history.push(`/patient/${event.target.name}`)
  }

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <Row>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={calendar} />
            <CardBody>
              <CardTitle>Calendar</CardTitle>
              <Button>View Calendar</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={newEntry} />
            <CardBody>
              <CardTitle>New Entry</CardTitle>
              <Button name="newentry" onClick={(event) => redirect(event)}>Create New Entry</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={profile} />
            <CardBody>
              <CardTitle>Profile</CardTitle>
              <Button name="profile" onClick={(event) => redirect(event)}>View Profile</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={stats} />
            <CardBody>
              <CardTitle>Statistics</CardTitle>
              <Button>View Statistics</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={viewEntries} />
            <CardBody>
              <CardTitle>Entries</CardTitle>
              <Button name="allentries" onClick={(event) => redirect(event)}>View Entries</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={providers} />
            <CardBody>
              <CardTitle>Providers</CardTitle>
              <Button>View All Providers</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
