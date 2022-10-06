import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { connect } from 'react-redux';
import IStore, { statusType } from '../../../types/state';

interface statusProp {
  status: statusType
}
function Message({ status } : statusProp) {
  const { message, type } = status;
  if (message) {
    return <UncontrolledAlert className="msg" color={type === 'error' ? 'danger' : 'success'}>{message}</UncontrolledAlert>;
  }
  return <> </>;
}
const mapStateToProps = ({ statusReducer } : IStore) => ({
  status: statusReducer,
});

export default connect(mapStateToProps)(Message);
