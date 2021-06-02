import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboard = React.lazy(() => import('./explore'));
const Create = React.lazy(() => import('./create'));
const Connect = React.lazy(() => import('./connect'));
const App = ({ match }) => {
  return (
    <AppLayout>
      <div>
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              path={`${match.url}/create`}
              render={(props) => <Create {...props} />}
            />
            <Route
              path={`${match.url}/connect`}
              render={(props) => <Connect {...props} />}
            />

            <Route
              exacts
              strict
              path={`/error`}
              render={(props) => <Dashboard {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
