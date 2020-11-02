import React from "react";
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import {
  ProductYearlySales,
  RecentSales,
  ChatListing,
  ProgressCards,
  RecentComments,
} from "./dashboard-components";

import img1 from "../assets/images/big/img1.jpg";
import img2 from "../assets/images/big/img2.jpg";
import img3 from "../assets/images/big/img3.jpg";

const Dashboard = () => {

  const history = useHistory();

  const redirect = (event) => {
    history.push(`/patient/${event.target.name}`)
  }

  return (
    <div>
      <h1>Patient Dashboard</h1>
      {/* <ProgressCards /> */}
      {/* <Row>
        <Col lg={12}>
          <ProductYearlySales />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <RecentSales />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <RecentComments />
        </Col>
        <Col sm={12} lg={4}>
          <ChatListing />
        </Col>
      </Row> */}
      <Row>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img1} />
            <CardBody>
              <CardTitle>Calendar</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText> */}
              <Button>View Calendar</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img2} />
            <CardBody>
              <CardTitle>New Entry</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText> */}
              <Button name="newentry" onClick={(event) => redirect(event)}>Create New Entry</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img3} />
            <CardBody>
              <CardTitle>Profile</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText> */}
              <Button>View Profile</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img2} />
            <CardBody>
              <CardTitle>Statistics</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText> */}
              <Button>View Statistics</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img2} />
            <CardBody>
              <CardTitle>Entries</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText> */}
              <Button>View All Entries</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img2} />
            <CardBody>
              <CardTitle>Providers</CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText> */}
              <Button>View All Providers</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
