import React, {useEffect} from "react";
import Login from "./layouts/Login.js"
import indexRoutes from "./routes/index.jsx";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { handlePersist } from './actions/patientActions';

const App = () => {
    // redux hooks
    const dispatch = useDispatch()

    useEffect(()=> {
        if (localStorage.token && localStorage.token != "undefined"){
            dispatch(handlePersist())
        }}, [])

    return(
        <Switch>
            <Route exact path='/' key='home' component={Login}/>
            {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
            })}
        </Switch>
    )
}

export default App