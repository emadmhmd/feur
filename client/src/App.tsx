import React from 'react';
import { connect } from 'react-redux';

import storeType from './types/state';

import Message from './components/shared/messageCom';
import Header from './components/shared/headerCom';
import TaskList from './components/task/taskList';

import 'bootstrap/dist/css/bootstrap.min.css';

type PropType = {
  isAuth: boolean,
}
function App({ isAuth }: PropType) {
  return (
    <div className="app">
      <Header />
      <Message />
      {isAuth && <TaskList />}
    </div>
  );
}

const mapStateToProps = ({ userReducer }: storeType) => ({
  isAuth: userReducer.isAuth,
});

export default connect(mapStateToProps)(App);
