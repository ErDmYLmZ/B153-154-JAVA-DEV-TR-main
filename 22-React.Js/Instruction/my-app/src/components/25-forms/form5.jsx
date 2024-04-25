import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

const Form5 = () => {
  const [loading, setLoading] = useState(false);


  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter first name")
      .min(2, "Please enter a valid first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    phone: Yup.string().required("Please enter your phone"),
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "At least 6 characters")
      .matches(/[a-z]+/, "One lowercase char")
      .matches(/[A-Z]+/, "One uppercase char")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Passwords don't match"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      const resp = await axios.post("https://651da7e644e393af2d5a2461.mockapi.io/api/v1/users", values);
      const data = resp.data
      formik.resetForm();
      alert("User was created")


    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
    finally{
      setLoading(false);
    }
    


  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const checkIsInvalid = (field) => {
    return formik.touched[field] && !!formik.errors[field];
  };

  const checkIsValid = (field) => {
    return formik.touched[field] && !formik.errors[field];
  };

  return (
    <Container className="mt-5">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...formik.getFieldProps("firstName")}
            /*        name="firstName"
          value={formik.values.firstName}
          onChange={(e)=> formik.handleChange(e.target.value)} */
            isInvalid={checkIsInvalid("firstName")}
            isValid={checkIsValid("firstName")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...formik.getFieldProps("lastName")}
            isInvalid={checkIsInvalid("lastName")}
            isValid={checkIsValid("lastName")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            {...formik.getFieldProps("email")}
            isInvalid={checkIsInvalid("email")}
            isValid={checkIsValid("email")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            {...formik.getFieldProps("phone")}
            isInvalid={checkIsInvalid("phone")}
            isValid={checkIsValid("phone")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            {...formik.getFieldProps("password")}
            isInvalid={checkIsInvalid("password")}
            isValid={checkIsValid("password")}
            
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            {...formik.getFieldProps("confirmPassword")}
            isInvalid={checkIsInvalid("confirmPassword")}
            isValid={checkIsValid("confirmPassword")}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" disabled={!(formik.dirty && formik.isValid) || loading}>
         {loading && <Spinner variant="border" size="sm"/>}  Register
        </Button>
      </Form>
    </Container>
  );
};

export default Form5;
