import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import User from './User';
import Service from './Service';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = ()=>{
return(
    <>

    <Switch>
    <Route exact path='/' component={About}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path ='/user/:fname' component={User}></Route>
    <Route exact path= '/service' component = {Service}></Route>
    <Route  component={Error}/>

    </Switch>
    </>
)
}

export default App;
