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

const initialValues: taskType = {
  task: '',
};

interface IProps {
  create: any,
}

function TaskModal({
  create,
}: IProps) {
  const [modal, setModal] = useState(false);

  async function toggle() {
    setModal(!modal);
  }

  const validationSchema = Yup.object().shape({
    task: Yup.string().typeError('Please Type the task').required('Please Type the email'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values: taskType) => {
      await create({ ...values });
      toggle();
      // setPicture('');
    },
  });

  return (
    <div>
      <Button onClick={toggle} className="btn">Create Task</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create new task</ModalHeader>
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
                  Create
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
  create: taskAction.create,
})(TaskModal);
