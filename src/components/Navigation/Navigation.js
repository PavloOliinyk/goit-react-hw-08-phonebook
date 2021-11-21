import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as authSelectors from '../../redux/selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontSize: 24,
    // color: '#2A363B',
  },
  activeLink: {
    color: '#ffffff',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.isUserLogin);

  return (
    <nav>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
