import React, {useEffect} from "react";
import Login from "./layouts/Login.js"
import indexRoutes from "./routes/index.jsx";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { handlePatientPersist } from './actions/patientActions';
import { handleProviderPersist } from './actions/providerActions';

const App = () => {
    // redux hooks
    const dispatch = useDispatch()

    useEffect(()=> {
        if (localStorage.patientToken && localStorage.patientToken != "undefined"){
            dispatch(handlePatientPersist())
        } else if (localStorage.providerToken && localStorage.providerToken != "undefined"){
            dispatch(handleProviderPersist())
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