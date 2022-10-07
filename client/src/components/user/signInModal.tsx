/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userAction } from '../../state/actions';
import { userType } from '../../types/domain';

const initialValues: userType = {
  email: '',
  password: '',
};

interface IProps {
    signIn: any,
}

function SignUpModal({
  signIn,
}: IProps) {
  const [modal, setModal] = useState(false);

  async function toggle() {
    setModal(!modal);
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().typeError('Please Type the email').required('Please Type the email'),
    password: Yup.string().typeError('Please type risk type !').required('Please Type the password'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values: userType) => {
      await signIn({ ...values });
      toggle();
    },
  });

  return (
    <div>
      <Button onClick={toggle} className="btn">SignIn</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>SignIn</ModalHeader>
        <ModalBody>
          <div>
            <form
              onSubmit={formik.handleSubmit}
            >
              <FormGroup>
                <Label>The Email</Label>
                <Input
                  placeholder="Enter the email"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </FormGroup>

              <FormGroup>
                <Label>The Password</Label>
                <Input
                  placeholder="Enter the password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </FormGroup>
              <ModalFooter>
                <Button className="modelBtn" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                  SignIn
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
  signIn: userAction.signIn,
})(SignUpModal);
