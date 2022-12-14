/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import SignUp from '../../user/signUpModal';
import SignIn from '../../user/signInModal';
import storeType from '../../../types/state';
import { userAction } from '../../../state/actions';

type propsType = {
  isAuth: boolean,
  logout(): void,
}

function Header({ isAuth, logout }: propsType) {
  function logoutUser() {
    logout();
  }

  return (
    <header className="header">
      <h1 className="title">Feur TODO </h1>
      <nav className="nav">
        {isAuth ? <Button onClick={logoutUser}>Logout</Button> : (
          <>
            <SignUp />
            <SignIn />
          </>
        )}
      </nav>
    </header>
  );
}

const mapStateToProps = ({ userReducer }: storeType) => ({
  isAuth: userReducer.isAuth,
});

export default connect(mapStateToProps, {
  logout: userAction.logout,
})(Header);
