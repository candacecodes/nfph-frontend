import React, { useState } from 'react';
import {
    Alert,
    // UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const ProviderAlerts = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
        Provider Alerts Test
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Alert color="primary">
                            This is a primary alert— check it out!
              </Alert>
                        <Alert color="secondary">
                            This is a secondary alert— check it out!
              </Alert>
                        <Alert color="success">
                            This is a success alert— check it out!
              </Alert>
                        <Alert color="danger">
                            This is a danger alert— check it out!
              </Alert>
                        <Alert color="warning">
                            This is a warning alert— check it out!
              </Alert>
                        <Alert color="info">This is a info alert— check it out!</Alert>
                        <Alert color="light">This is a light alert— check it out!</Alert>
                        <Alert color="dark">This is a dark alert</Alert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-2*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Patient 1 Entries
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert color="primary">
                            {/* This is a primary alert with */}
                <a href="/" className="alert-link">
                                Patient Entry 1 
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                        <Alert color="secondary">
                            {/* This is a secondary alert with */}
                <a href="/" className="alert-link">
                Patient Entry 2 
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                        <Alert color="success">
                            {/* This is a success alert with */}
                <a href="/" className="alert-link">
                Patient Entry 3
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                        <Alert color="danger">
                            {/* This is a danger alert with */}
                <a href="/" className="alert-link">
                Patient Entry 4
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                        <Alert color="warning">
                            {/* This is a warning alert with */}
                <a href="/" className="alert-link">
                Patient Entry 5
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                        <Alert color="info">
                            {/* This is a info alert with */}
                <a href="/" className="alert-link">
                Patient Entry 6
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                        <Alert color="light">
{/* sadfsdf */}
                <a href="/" className="alert-link">
                Patient Entry 7
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                        <Alert color="dark">
                            {/* This is a dark alert with */}
                <a href="/" className="alert-link">
                Patient Entry 8
                </a>
                {/* . Give it a click if you like. */}
              </Alert>
                    </div>
                </CardBody>
            </Card>


            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
Notes Regarding Patient 
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert
                            color="info"
                            isOpen={visible}
                            toggle={onDismiss.bind(null)}
                        >
To do which can be dismissed. 
              </Alert>
                    </div>
                </CardBody>
            </Card>


            
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-3*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
                    
Other Notes 
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert color="success">
                            <h4 className="alert-heading">Well done!</h4>
                            <p>
                                Aww yeah, you successfully read this important alert message.
                                This example text is going to run a bit longer so that you can
                                see how spacing within an alert works with this kind of
                                content.
                </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep
                                things nice and tidy.
                </p>
                        </Alert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-4*/}
            {/* --------------------------------------------------------------------------------*/}



            {/* --------------------------------------------------------------------------------*/}
            {/* Card-5*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Alert with Uncontrolled [disable] Alerts
          </CardTitle>
                <CardBody className="">
                    <div>
                        <UncontrolledAlert color="info">
                            I am an alert and I can be dismissed!
              </UncontrolledAlert>
                    </div>
                </CardBody>
            </Card> */}
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-6*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Alerts without fade
          </CardTitle> */}
                {/* <CardBody className="">
                    <div>
                        <Alert
                            color="primary"
                            isOpen={visible}
                            toggle={onDismiss.bind(null)}
                            fade={false}
                        >
                            I am a primary alert and I can be dismissed without animating!
              </Alert>
                        <UncontrolledAlert color="warning" fade={false}>
                            I am an alert and I can be dismissed without animating!
              </UncontrolledAlert>
                    </div>
                </CardBody> */}
            {/* </Card> */}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default ProviderAlerts;
