/* eslint-disable class-methods-use-this */
import { Dispatch } from 'redux';
import { taskApi } from '../../api';
import { statusAction, getAction } from '.';
import { taskType } from '../../types/domain';
import { TASKS_GOT } from './action.d';

class User {
  createAction = (task: taskType) => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      const { data: { msg } } = await taskApi.create(task);
      const { data: { tasks } } = await taskApi.getAll();
      dispatch({ type: TASKS_GOT, payload: tasks });
      dispatch(statusAction.addSuccessStatus(msg));
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };

  updateAction = (id: string, task: taskType) => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      const { data: { msg } } = await taskApi.update(id, task);
      const { data: { tasks } } = await taskApi.getAll();
      dispatch({ type: TASKS_GOT, payload: tasks });
      dispatch(statusAction.addSuccessStatus(msg));
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };

  deleteAction = (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      const { data: { msg } } = await taskApi.delete(id);
      const { data: { tasks } } = await taskApi.getAll();
      dispatch({ type: TASKS_GOT, payload: tasks });
      dispatch(statusAction.addSuccessStatus(msg));
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
    }
  };

  getAllAction = () => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      dispatch(getAction.gettingTime());
      const { data: { msg, tasks } } = await taskApi.getAll();
      dispatch({ type: TASKS_GOT, payload: tasks });
      dispatch(statusAction.addSuccessStatus(msg));
      dispatch(getAction.gettingFailed());
    } catch (e: any) {
      dispatch(statusAction.addErrorStatus(e.response.data.error));
      dispatch(getAction.gettingFailed());
    }
  };
}

export default new User();
