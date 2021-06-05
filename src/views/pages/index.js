import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import MainLayout from '../../layout/MainLayout';

const Dashboard = React.lazy(() => import('./explore'));
const Create = React.lazy(() => import('./create'));
const Connect = React.lazy(() => import('./connect'));
const Token = React.lazy(() => import('./token'));
const Items = React.lazy(() => import('./items'));
const App = ({ match }) => {
  return (
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
            render={(props) => (
              <AppLayout>
                <Dashboard {...props} />
              </AppLayout>
            )}
          />
          <Route
            path={`${match.url}/create`}
            render={(props) => (
              <AppLayout>
                <Create {...props} />
              </AppLayout>
            )}
          />
          <Route
            path={`${match.url}/connect`}
            render={(props) => <Connect {...props} />}
          />
          <Route
            path={`${match.url}/token/:id`}
            render={(props) => (
              <MainLayout>
                <Token {...props} />
              </MainLayout>
            )}
          />
          <Route
            exacts
            strict
            path={`${match.url}/items`}
            render={(props) => (
              <AppLayout>
                <Items {...props} />
              </AppLayout>
            )}
          />
          <Route
            exacts
            strict
            path={`/error`}
            render={(props) => (
              <AppLayout>
                <Dashboard {...props} />
              </AppLayout>
            )}
          />

          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </div>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
