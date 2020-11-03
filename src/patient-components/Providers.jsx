import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    CardColumns,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledCollapse
} from 'reactstrap';

import img1 from "../assets/images/users/1.jpg";
import img2 from "../assets/images/users/2.jpg";
import img3 from "../assets/images/users/3.jpg";

const Providers = () => {
  return (
    <div>
      <h4 className="mb-3 text-right">Search All Providers: (Search bar)</h4>
      <h4 className="mb-3">Your Providers</h4>
      <Card>
        <CardBody>
          <div className="p-2">
            <img
              src={img1}
              alt="user"
              width="40"
              className="rounded-circle"
            />
            Dr. House
          </div>
          <div className="comment-text w-100">
            <span className="text-muted mr-2 font-12">
              M.D. Neurology, John Hopkins University
            </span>
            <span className="badge badge-success badge-rounded text-uppercase font-medium text-white">
              In network 
            </span>
            <span className="mb-2 d-block font-14 text-muted font-light mt-3">
              Worked 10 years directly with NF patients
            </span>
            <div className="mt-3">
              <Button>View Profile</Button>
              <Button>Add Provider</Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="p-2">
            <img
              src={img1}
              alt="user"
              width="40"
              className="rounded-circle"
            />
            Dr. Doctor
          </div>
          <div className="comment-text w-100">
            <span className="text-muted mr-2 font-12">
              Genetics Counseling, Virginia Mason Center
            </span>
            <span className="badge badge-danger badge-rounded text-uppercase font-medium text-white">
              Out of network 
            </span>
            <span className="mb-2 d-block font-14 text-muted font-light mt-3">
              Worked 10 years directly with NF patients
            </span>
            <div className="mt-3">
              <Button>View Profile</Button>
              <Button>Add Provider</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Providers;
