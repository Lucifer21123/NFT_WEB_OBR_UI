import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import MobileMenu from './MobileMenu';

const AppLayout = ({ containerClassnames, children }) => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <div id="app-container" className={containerClassnames}>
      {mobileMenuOpened && (
        <MobileMenu
          mobileMenuOpened={mobileMenuOpened}
          setMobileMenuOpened={setMobileMenuOpened}
        />
      )}
      <Header
        mobileMenuOpened={mobileMenuOpened}
        setMobileMenuOpened={setMobileMenuOpened}
      />
      <main>
        <div className="nft-container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
