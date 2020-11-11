import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editPatientProfile, deletePatientProfile } from '../actions/patientActions';
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
  // redux hooks
  let state = useSelector(state => state.patient.patientInfo)
  const dispatch = useDispatch()
  const history = useHistory();

  const redirect = (event) => {
    localStorage.clear()
    history.push('/');
  }

<<<<<<< HEAD
  // This is just a temporary fix

=======
  // displays user
>>>>>>> 9972dc34570d4ba91c81f7c549a143006a86a73b
  const [user, setUser] = useState({ user: {
    first_name: '',
    last_name: '',
    email_address: '',
    diagnosis: '',
    prescriptions: [],
    organization_id: ''
  } });

  useEffect(() => {
    if (state) {
      setUser(state)
    }});

  // toggle edit mode and set form control
  const [editMode, setEditMode] = useState(false);
  const changeToEditMode = () => {
    setEditMode(!editMode)
    setFormData(state)
  }

  // form control
  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    email_address: '',
    diagnosis: '',
    prescriptions: [],
  })

  const handleFormChange = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  // submit profile change
  const updateProfile = (event) => {
    event.preventDefault();
    dispatch(editPatientProfile(formData, state.id))
    setEditMode(!editMode)
  }

  // Doesn't work yet because of foreign key constraints
  const deleteProfile = () => {
    dispatch(deletePatientProfile(state.id))
    redirect()
  }

  return (
    <div>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
            <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Profile
        </CardTitle>
        <div >
          <div className="row">
              <div className="col-lg-4 col-xlg-3 col-md-12">
                  <div className="white-box">
                      <div className="user-bg">
                          <CardImg width="100%" src={img1} />
                              <div className="overlay-box">
                                  <div className="user-content">
                                      <h4 className="mt-2">{user.first_name} {user.last_name}</h4>
                                  </div>
                              </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-8 col-xlg-9 col-md-12">
                {
                  editMode === false ?
                  <Card>
                    <CardBody>
                        <CardTitle>Name</CardTitle>
                        <CardSubtitle>{user.first_name + ' ' + user.last_name}</CardSubtitle>
                        <CardTitle>Email</CardTitle>
                        <CardSubtitle>{user.email_address}</CardSubtitle>
                        <CardTitle>Diagnosis</CardTitle>
                        <CardSubtitle>{user.diagnosis}</CardSubtitle>
                        <CardTitle>Prescriptions</CardTitle>
                        <CardSubtitle>none</CardSubtitle>
                        <CardTitle>Organization</CardTitle>
                        <CardSubtitle>{user.organization_id}</CardSubtitle>
                        <Button className="btn btn btn-primary btn-lg" onClick={changeToEditMode}>Edit Profile</Button>
                        <Button className="btn btn btn-primary btn-lg" onClick={deleteProfile}>Delete Profile</Button>
                    </CardBody>
                  </Card>
                  :
                  <Card>
                    <CardBody>
                        {/* What do we want people to be able to edit? */}
                        <form onSubmit={(event) => updateProfile(event)}>
                          <CardTitle>Name</CardTitle>
                          <input className="form-control-sm" type="text" name="first_name" defaultValue={formData.first_name} onChange={handleFormChange}/><br/>
                          <input className="form-control-sm" type="text" name="last_name" defaultValue={formData.last_name} onChange={handleFormChange}/>
                          <CardTitle>Email</CardTitle>
                          <input className="form-control-sm" type="text" name="email_address" defaultValue={formData.email_address} onChange={handleFormChange}/>
                          <CardTitle>Diagnosis</CardTitle>
                          <select className="form-control-sm" type="text" name="diagnosis" defaultValue='n/a' onChange={handleFormChange}>
                            <option value='n/a' disabled>Choose your diagnosis...</option>
                            <option value='Neurofibromatosis type 1 (NF1)'>Neurofibromatosis type 1 (NF1)</option>
                            <option value='Neurofibromatosis type 2 (NF2)'>Neurofibromatosis type 2 (NF2)</option>
                            <option value='Schwannomatosis (SWN)'>Schwannomatosis (SWN)</option>
                          </select>
                          <CardTitle>Prescriptions</CardTitle>
                          <CardSubtitle>none</CardSubtitle>
                          <CardTitle>Organization</CardTitle>
                          <CardSubtitle>{user.organization_id}</CardSubtitle>
                          <input className="btn btn btn-primary btn-lg" type="submit" value="Save Profile"/>
                        </form>
                    </CardBody>
                  </Card>
                }
              </div>

          </div>
        </div>

  </div>

  );
};
export default Profile;