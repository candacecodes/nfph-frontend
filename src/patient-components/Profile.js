import React, {useEffect} from "react";
// import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
//   CardText,
  Button
} from 'reactstrap';

import img1 from '../assets/images/big/img1.jpg';

const Profile = () => {

   useEffect(() => {
        let userInfo = fetchUser();
        console.log(fetchUser())
   });

  const fetchUser = () => {
    fetch(`http://localhost:3000/patients/1`)
    .then(response => {
        return response.json()
      })
    .catch(err => console.log('fetchUser error:', err))
  }

  return (

    <div>

        <CardTitle className="bg-light border-bottom p-3 mb-0">
            <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Profile
        </CardTitle>

        <div className="row">

            <div className="col-lg-4 col-xlg-3 col-md-12">
                <div className="white-box">
                    <div className="user-bg">
                        <CardImg width="100%" src={img1} />
                            <div className="overlay-box">
                                <div className="user-content">
                                    <h4 className="text-white mt-2">FirstName LastName</h4>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-xlg-9 col-md-12">
                <Card>
                <CardBody>
                    <CardTitle>Name</CardTitle>
                    <CardSubtitle>FirstName LastName</CardSubtitle>
                    <CardTitle>Email</CardTitle>
                    <CardSubtitle>patient@gmail.com</CardSubtitle>
                    <CardTitle>Diagnosis</CardTitle>
                    <CardSubtitle>Diagnosis Summary</CardSubtitle>
                    <CardTitle>Prescriptions</CardTitle>
                    <CardSubtitle>List of prescriptions</CardSubtitle>
                    <CardTitle>Organisation</CardTitle>
                    <CardSubtitle>Organisation</CardSubtitle>
                    <Button>Edit Profile</Button>
                </CardBody>
                </Card>
            </div>

        </div>

  </div>

  );
};
export default Profile;