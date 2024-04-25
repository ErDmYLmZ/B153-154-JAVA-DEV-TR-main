import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import ReactInputMask from "react-input-mask";
import * as Yup from "yup";

const FormPractiseWithFormikYup = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    zipCode: "",
    contract: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Lütfen adınızı giriniz"),
    lastName: Yup.string().required("Lütfen soyadınızı giriniz"),
    password: Yup.string()
      .required("Lütfen şifrenizi giriniz")
      .min(8, "En az 8 karakter olmalı")
      .matches(/[a-z]+/, "En az bir küçük harf olmalı")
      .matches(/[A-Z]+/, "En az bir büyük harf olmalı")
      .matches(/[@$!%*#?&.+_']+/, "En az bir özel karakter olmalı")
      .matches(/\d+/, "En az bir rakam olmalı"),
    confirmPassword: Yup.string()
      .required("Lütfen şifrenizi tekrar giriniz")
      .oneOf(
        [Yup.ref("password"), null],
        "Şifreniz eşleşmedi, lütfen doğru girdiğinize emin olun"
      ),
    email: Yup.string()
      .email("Düzgün bir email girin")
      .required("Lütfen emailinizi giriniz"),
    phone: Yup.string()
      .required("Lütfen telefon numaranızı giriniz")
      .test(
        "is_includes_",
        "Please enter a valid phone number",
        (val) => val && !val.includes("_")
      ),
    birthDate: Yup.string().required("Lütfen doğum tarihinizi giriniz"),
    address: Yup.string().required("Lütfen adresinizi giriniz"),
    zipCode: Yup.string().required("Lütfen posta kodunuzu giriniz"),
    contract: Yup.boolean().oneOf(
      [true],
      "Lütfen kontratı okuyun ve kutucuğu işaretleyin"
    ),
  });

  const onSubmit = (values) => {
    setTimeout(() => {
      setLoading(false);
      alert("Kayıt Başarılı");
      formik.resetForm();
      initialValues.contract = false;
      values.contract = false;
      window.location.reload(false);
    }, 2500);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="mt-5">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("firstName")}
            isInvalid={formik.touched.firstName && formik.errors.firstName}
            isValid={formik.touched.firstName && !formik.errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("lastName")}
            isInvalid={formik.touched.lastName && formik.errors.lastName}
            isValid={formik.touched.lastName && !formik.errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            {...formik.getFieldProps("confirmPassword")}
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            isValid={
              formik.touched.confirmPassword && !formik.errors.confirmPassword
            }
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            as={ReactInputMask}
            mask="(999) 999-99-99"
            {...formik.getFieldProps("phone")}
            isInvalid={formik.touched.phone && formik.errors.phone}
            isValid={formik.touched.phone && !formik.errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            {...formik.getFieldProps("birthDate")}
            isInvalid={formik.touched.birthDate && formik.errors.birthDate}
            isValid={formik.touched.birthDate && !formik.errors.birthDate}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.birthDate}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("address")}
            isInvalid={formik.touched.address && formik.errors.address}
            isValid={formik.touched.address && !formik.errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.address}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("zipCode")}
            isInvalid={formik.touched.zipCode && formik.errors.zipCode}
            isValid={formik.touched.zipCode && !formik.errors.zipCode}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.zipCode}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="I have read and aggree the contract"
            {...formik.getFieldProps("contract")}
            isInvalid={formik.touched.contract && formik.errors.contract}
            isValid={formik.touched.contract && !formik.errors.contract}
            defaultValue={false}
          />
        </Form.Group>
        <Button
          variant="warning"
          type="submit"
          disabled={!(formik.dirty && formik.isValid) || loading}
        >
          {loading && <Spinner animation="border" size="sm" />} Register
        </Button>
      </Form>
    </Container>
  );
};

export default FormPractiseWithFormikYup;
