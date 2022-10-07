/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Table } from 'reactstrap';
import { taskAction } from '../../state/actions';
import { taskType } from '../../types/domain';
import storeType from '../../types/state';
import TaskModal from './taskModal';
import TaskUpdateModal from './taskUpdateModal';

type PropsType = {
  getAll(): void,
  tasks: Array<taskType>,
  deleteTask(id: string): void,
}

function TaskList({ getAll, tasks, deleteTask }: PropsType) {
  useEffect(() => {
    getAll();
  }, [getAll]);

  async function deleteTaskById(id: string) {
    await deleteTask(id);
  }
  return (
    <div className="taskList">
      <div className="listHeader">
        <h2 className="listTitle">Task List </h2>
        <TaskModal />
      </div>
      <Table striped bordered hover variant="dark">
        <tbody>
          {tasks?.map((task: taskType) => (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>
                <ButtonGroup>
                  <TaskUpdateModal oldTask={task} />
                  <Button onClick={() => deleteTaskById(task.id as string)}>Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = ({ taskReducer }: storeType) => ({
  tasks: taskReducer.tasks,
});

export default connect(mapStateToProps, {
  getAll: taskAction.getAll,
  deleteTask: taskAction.delete,
})(TaskList);
