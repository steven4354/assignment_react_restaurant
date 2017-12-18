import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./welcome";
import Menu from "./menu";
import Reservations from "./reservation-form";

const Routers = props =>{
  return (
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/menu' component={Menu} />
          <Route path='/reservation' component={Reservations} />
        </Switch>
  );
};

export default Routers;