import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './header';

const MainLayout = ({ containerClassnames, children }) => {
  return (
    <div id="app-container" className={containerClassnames}>
      <Header />
      <main>
        <div className="nft-container">{children}</div>
      </main>
    </div>
  );
};
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(MainLayout)
);
