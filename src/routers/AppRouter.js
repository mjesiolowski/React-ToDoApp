import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
// import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';


const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/edit/:id" component={EditTask} />
      {/* <Route path="/add" component={AddTask} /> */}
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
