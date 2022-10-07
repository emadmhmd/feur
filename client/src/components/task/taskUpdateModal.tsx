/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { taskAction } from '../../state/actions';
import { taskType } from '../../types/domain';

interface IProps {
  update(id: string, task: taskType): void,
  oldTask: taskType,
}

function TaskUpdateModal({
  update, oldTask,
}: IProps) {
  const [modal, setModal] = useState(false);

  async function toggle() {
    setModal(!modal);
  }
  const initialValues: taskType = {
    task: oldTask.task,
  };

  const validationSchema = Yup.object().shape({
    task: Yup.string().typeError('Please Type the task').required('Please Type the email'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values: taskType) => {
      await update(oldTask.id as string, { ...values });
      toggle();
    },
  });

  return (
    <div>
      <Button onClick={toggle} className="btn">Update</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update the task</ModalHeader>
        <ModalBody>
          <div>
            <form
              onSubmit={formik.handleSubmit}
            >
              <FormGroup>
                <Label>The task</Label>
                <Input
                  placeholder="Enter the task"
                  type="text"
                  name="task"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.task}
                />
              </FormGroup>
              <ModalFooter>
                <Button className="modelBtn" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                  Update
                </Button>
                <Button className="modelBtn" color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </form>
          </div>
        </ModalBody>

      </Modal>
    </div>
  );
}

export default connect(null, {
  update: taskAction.update,
})(TaskUpdateModal);
