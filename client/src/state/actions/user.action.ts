/* eslint-disable class-methods-use-this */
import { Dispatch } from 'redux';
import { userApi, setAuthHeader } from '../../api';
import { statusAction } from '.';
import { userType } from '../../types/domain';
import { SIGNIN_SUCCESS, PROFILE_GOT, LOGOUT_SUCCESS } from './action.d';

const TOKEN_NAME = 'feur_todo_app_token';

class User {
  signUpAction = (user: userType) => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      const { data: { msg } } = await userApi.signup(user);
      dispatch(statusAction.addSuccessStatus(msg));
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };

  signInAction = (user: userType) => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());

      const { data: { token, msg } } = await userApi.signin(user);
      setAuthHeader(token);

      const { data } = await userApi.getProfile();
      dispatch({ type: PROFILE_GOT, payload: data.user });
      this.setToken(token);
      dispatch({ type: SIGNIN_SUCCESS });

      dispatch(statusAction.addSuccessStatus(msg));
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };

  getProfileAction = () => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());

      const { data: { user, msg } } = await userApi.getProfile();

      dispatch({ type: PROFILE_GOT, payload: user });

      dispatch(statusAction.addSuccessStatus(msg));
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };

  setToken = (token: string) => {
    localStorage.setItem(TOKEN_NAME, token);
  };

  onLoadingSignIn = () => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        setAuthHeader(token);
        const { data } = await userApi.getProfile();
        dispatch({ type: PROFILE_GOT, payload: data.user });
        this.setToken(token);
        dispatch({ type: SIGNIN_SUCCESS });
      }
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };

  logoutAction = () => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      localStorage.clear();
      dispatch({ type: LOGOUT_SUCCESS });
      dispatch(statusAction.addSuccessStatus('Logout successful'));
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };
}

export default new User();
