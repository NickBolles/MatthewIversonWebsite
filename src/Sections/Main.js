import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './ProfileIntro';
import Programming from "./Programming";
import PentrationTesting from "./PentrationTesting";
import Contact from './Contact';
import Resume from './Resume';
import Biography from './Biography';


const Main = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/Biography" component={Biography} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Programming" component={Programming} />
    <Route path="/PentrationTesting" component={PentrationTesting} />
    <Route path="/Contact" component={Contact} />
  </Switch>
)

export default Main;