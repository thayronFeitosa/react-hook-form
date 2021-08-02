import React from 'react';
import { Switch, Route as Rota } from 'react-router-dom';
import Route from './Router';
import { ConsultClient } from '../pages/userManage/consultCustomers';
import { ClientUserView } from '../pages/userManage/compliance/view';

const PagesRoot: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ConsultClient} isPrivate />
    <Route path="/view/visualizador/:id" exact component={ClientUserView} isPrivate />
    <Route path="/view/editor/:id" exact component={ClientUserView} isPrivate />
  </Switch>
);

export default PagesRoot;
