import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import MainLayout from './layout/MainLayout';

const Dashboard = React.lazy(() => import('./pages/explore'));
const Create = React.lazy(() => import('./pages/create'));
const Connect = React.lazy(() => import('./pages/connect'));
const Token = React.lazy(() => import('./pages/token'));
const Items = React.lazy(() => import('./pages/items'));
const ErrorPage = React.lazy(() => import('./pages/error'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="h-100">
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <Switch>
              <Redirect exact from={`/`} to={`/explore`} />
              <Route
                path={`/explore`}
                render={(props) => (
                  <AppLayout>
                    <Dashboard {...props} />
                  </AppLayout>
                )}
              />
              <Route
                path={`/create`}
                render={(props) => (
                  <AppLayout>
                    <Create {...props} />
                  </AppLayout>
                )}
              />
              <Route
                path={`/connect`}
                render={(props) => <Connect {...props} />}
              />
              <Route
                path={`/token/:id`}
                render={(props) => (
                  <MainLayout>
                    <Token {...props} />
                  </MainLayout>
                )}
              />
              <Route
                exacts
                strict
                path={`/items`}
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
                    <ErrorPage {...props} />
                  </AppLayout>
                )}
              />

              <Redirect to="/error" />
            </Switch>
          </Router>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale, countryCode } = settings;
  return { locale, countryCode };
};
const mapActionsToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapActionsToProps)(App);
