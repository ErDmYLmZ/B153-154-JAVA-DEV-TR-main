import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Lütfen geçerli bir email giriniz")
      .required("Lütfen emailinizi giriniz"),
    password: Yup.string().required("Lütfen parolanızı giriniz"),
  });

  const onSubmit = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logged in Successfully!",
      showConfirmButton: false,
      timer: 2500,
    });
    setTimeout(() => {
      navigate("/students");
    }, 2500);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="login">
      <Card>
        <Card.Body>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
                isInvalid={formik.touched.password && !!formik.errors.password}
                isValid={formik.touched.password && !formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
                style={{ width: "100%" }}
              >
                Sign In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
