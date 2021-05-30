import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const coins = [
  'BUSD',
  'USDT',
  'USDC',
  'BTCB',
  'BNB',
  'ETH',
  'DAI',
  'SXP',
  'DOT',
  'BETH',
  'LINK',
  'XVS',
  'ADA',
  'LTC',
  'XRP',
  'FIL',
  'BCH',
];
const isCoin = (value) => {
  try {
    return coins.includes(value);
  } catch {
    return false;
  }
};

const isInteger = (value) => {
  return /^\d+$/.test(value);
};

const Dashboard = React.lazy(() => import('./explore'));

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
