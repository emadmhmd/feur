/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { taskAction } from '../../state/actions';
import { taskType } from '../../types/domain';
import storeType from '../../types/state';
import TaskModal from './taskModal';
import TaskUpdateModal from './taskUpdateModal';

type PropsType = {
  getAll: any,
  tasks: Array<taskType>,
  deleteAction: any,
}
function TaskList({ getAll, tasks, deleteAction }: PropsType) {
  useEffect(() => {
    getAll();
  }, []);

  async function deleteTask(id: string) {
    await deleteAction(id);
  }
  return (
    <div>
      <h1 className="">Task List </h1>
      <TaskModal />
      {tasks?.map((task: taskType) => (
        <div key={task.id}>
          <p>{task.task}</p>
          <TaskUpdateModal oldTask={task} />
          <Button onClick={() => deleteTask(task.id as string)}>Delete</Button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = ({ taskReducer }: storeType) => ({
  tasks: taskReducer.tasks,
});

export default connect(mapStateToProps, {
  getAll: taskAction.getAllAction,
  deleteAction: taskAction.deleteAction,
})(TaskList);
