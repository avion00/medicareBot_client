import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent,
  MedicareClientDashboard,
  MedicareClientBilling,
  MedicareClientBot,
  MedicareClientSettings,
  MedicareClientInteractions,
  MedicareClientReports,
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        { /* Home */ }
        <Route exact path="/app" component={MedicareClientDashboard} />
        <Route path="/app/pages/dashboard" component={DashboardPage} />
        <Route path="/app/pages/form" component={Form} />
        <Route path="/app/pages/table" component={Table} />
        <Route path="/app/pages/page-list" component={Parent} />
        <Route path="/app/pages/pages/not-found" component={NotFound} />
        <Route path="/app/pages/pages/error" component={Error} />
        <Route path="/app/dashboard" component={MedicareClientDashboard} />
        <Route path="/app/billing" component={MedicareClientBilling} />
        <Route path="/app/bot" component={MedicareClientBot} />
        <Route path="/app/interactions" component={MedicareClientInteractions} />
        <Route path="/app/reports" component={MedicareClientReports} />
        <Route path="/app/settings" component={MedicareClientSettings} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired
};

export default Application;
