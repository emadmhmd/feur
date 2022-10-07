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
  name: '',
  email: '',
  password: '',
  mobile: '',

};

interface PropsType {
  signUp(user: userType): void,
}

function SignUpModal({
  signUp,
}: PropsType) {
  const [modal, setModal] = useState(false);

  async function toggle() {
    setModal(!modal);
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().typeError('Please Type the name').required('Please Type the name'),
    email: Yup.string().typeError('Please Type the email').required('Please Type the email'),
    password: Yup.string().typeError('Please type risk type !').required('Please Type the password'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values: userType) => {
      await signUp({ ...values });
      toggle();
      // setPicture('');
    },
  });

  return (
    <div>
      <Button onClick={toggle} className="btn">SignUp</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>SignUp New User</ModalHeader>
        <ModalBody>
          <div>
            <form
              onSubmit={formik.handleSubmit}
            >

              <FormGroup>
                <Label>The Name</Label>
                <Input
                  placeholder="Enter the name"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </FormGroup>

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
                <Label>The Mobile</Label>
                <Input
                  placeholder="Enter the mobile"
                  type="tel"
                  name="mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
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
                  SignUp
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
  signUp: userAction.signUp,
})(SignUpModal);
