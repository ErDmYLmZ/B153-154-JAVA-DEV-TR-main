import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, ModalFooter } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import {
  createNewStudent,
  deleteStudentById,
  getStudentsByPage,
  searchStudents,
  updateStudent,
} from "../../../api/students_service";
import { HiOutlinePencil } from "react-icons/hi";
import { SlTrash } from "react-icons/sl";
import * as Yup from "yup";
import "./students.scss";
import { useFormik } from "formik";
import ReactInputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [initialValues, setInitialValues] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Lütfen öğrencinin ismini giriniz"),
    email: Yup.string()
      .email("Lütfen geçerli bir email giriniz")
      .required("Lütfen öğrencinin emailini giriniz"),
    phone: Yup.string()
      .required("Lütfen telefon numaranızı giriniz")
      .test(
        "is_includes_",
        "Please enter a valid phone number",
        (val) => val && !val.includes("_")
      ),
    website: Yup.string().required(
      "Lütfen öğrencinin website adresini giriniz"
    ),
    companyName: Yup.string().required(
      "Lütfen öğrencinin şirket ismini giriniz"
    ),
  });

  const columns = [
    {
      cell: (row) => (
        <img src={row.image} alt="students-img" className="img-fluid" />
      ),
      width: "100px",
    },
    {
      name: "Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row.domain,
      sortable: true,
    },
    {
      name: "Company Name",
      selector: (row) => row.company.name,
      sortable: true,
    },
    {
      cell: (row) => (
        <HiOutlinePencil
          style={{ fontSize: "1.5rem", color: "#FEAF00", cursor: "pointer" }}
          onClick={() => handleStudentUpdate(row.id)}
        />
      ),
    },
    {
      cell: (row) => (
        <SlTrash
          style={{ fontSize: "1.5rem", color: "#FEAF00", cursor: "pointer" }}
          onClick={() => handleDelete(row.id)}
        />
      ),
    },
  ];

  const loadData = async (page) => {
    try {
      // fetch, setTimeout, setInterval
      const resp = await getStudentsByPage(perPage, page);
      const { total, users } = resp.data;
      setStudents(users);
      setTotalRows(total);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (page) => {
    loadData(page - 1);
  };

  const handleChangeRowsPerPage = async (newPerPage, page) => {
    try {
      // fetch, setTimeout, setInterval
      const resp = await getStudentsByPage(newPerPage, page);
      const { users } = resp.data;
      setStudents(users);
      setPerPage(newPerPage);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeStudent(id);
      }
    });
  };

  const removeStudent = async (id) => {
    try {
      const resp = await deleteStudentById(id);
      console.log(resp.data.isDeleted, resp.data.deletedOn);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      Swal.fire("Deleted!", "Student has been deleted.", "success");
    }
  };

  const handleSearch = async (e) => {
    try {
      if (e.target.value === "") {
        loadData();
        document.querySelector(".sc-bYwyHq")?.classList.remove("d-none");
        document.querySelector(".sc-lmgPJu")?.classList.remove("d-none");
      } else {
        const resp = await searchStudents(e.target.value);
        const { users, total } = resp.data;
        setStudents(users);
        setTotalRows(total);
        document.querySelector(".sc-bYwyHq")?.classList.add("d-none");
        document.querySelector(".sc-lmgPJu")?.classList.add("d-none");
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("file", values.image);
    try {
      // eslint-disable-next-line
      const resp = await createNewStudent({
        image: formData,
        firstName: values.name,
        email: values.email,
        phone: values.phone,
        domain: values.domain,
        company: {
          name: values.companyName,
        },
      });
      formik.resetForm();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Added Successfully!",
        showConfirmButton: false,
        timer: 2500,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      handleClose();
    }
  };

  const handleStudentUpdate = (id) => {
    setStudentId(id);
    const studentData = students.filter((item) => item.id === id);
    setInitialValues({
      image: studentData[0].image,
      name: studentData[0].firstName,
      email: studentData[0].email,
      phone: studentData[0].phone,
      website: studentData[0].domain,
      companyName: studentData[0].company.name,
    });
    /*     
      formik.setValues({
      image: students[0].image,
      name: students[0].firstName,
      email: students[0].email,
      phone: students[0].phone,
      website: students[0].domain,
      companyName: students[0].company.name,
    }); 
    */
    handleShow2();
  };

  const handleUpdateStudent = async () => {
    try {
      // eslint-disable-next-line
      const resp = await updateStudent(studentId, {
        image: initialValues.image,
        firstName: initialValues.name,
        email: initialValues.email,
        phone: initialValues.phone,
        domain: initialValues.website,
        company: {
          name: initialValues.companyName,
        },
      });
      formik.resetForm();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Updated Successfully!",
        showConfirmButton: false,
        timer: 2500,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="students">
      <div className="mt-3 d-flex justify-content-end align-items-center gap-3">
        <Form.Control
          type="text"
          placeholder="Search..."
          style={{ width: "25%" }}
          onChange={(e) => handleSearch(e)}
        />
        <Button variant="primary" onClick={handleShow}>
          ADD NEW STUDENT
        </Button>
        <Button variant="danger" className="me-3" onClick={() => navigate("/")}>
          Logout
        </Button>
      </div>
      <Container className="mt-5">
        <DataTable
          columns={columns}
          data={students}
          progressPending={loading}
          pagination
          paginationServer
          paginationPerPage={perPage}
          paginationRowsPerPageOptions={[6, 10, 15, 20, 25, 30]}
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          onChangePage={handleChangePage}
        />
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" accept=".jpg,.jpeg,.png" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && !!formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                as={ReactInputMask}
                mask="(999) 999-99-99"
                {...formik.getFieldProps("phone")}
                isInvalid={formik.touched.phone && !!formik.errors.phone}
                isValid={formik.touched.phone && !formik.errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="url"
                {...formik.getFieldProps("website")}
                isInvalid={formik.touched.website && !!formik.errors.website}
                isValid={formik.touched.website && !formik.errors.website}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.website}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("companyName")}
                isInvalid={
                  formik.touched.companyName && !!formik.errors.companyName
                }
                isValid={
                  formik.touched.companyName && !formik.errors.companyName
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.companyName}
              </Form.Control.Feedback>
            </Form.Group>
            <ModalFooter>
              <Button
                variant="primary"
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Add Student
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </ModalFooter>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("image")}
                isInvalid={formik.touched.image && !!formik.errors.image}
                isValid={formik.touched.image && !formik.errors.image}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && !!formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
                value={initialValues.name}
                onChange={(e) =>
                  setInitialValues({ ...initialValues, name: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
                value={initialValues.email}
                onChange={(e) =>
                  setInitialValues({ ...initialValues, email: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                {...formik.getFieldProps("phone")}
                isInvalid={formik.touched.phone && !!formik.errors.phone}
                isValid={formik.touched.phone && !formik.errors.phone}
                as={ReactInputMask}
                mask="(999) 999-99-99"
                value={initialValues.phone}
                onChange={(e) =>
                  setInitialValues({ ...initialValues, phone: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="url"
                {...formik.getFieldProps("website")}
                isInvalid={formik.touched.website && !!formik.errors.website}
                isValid={formik.touched.website && !formik.errors.website}
                value={initialValues.website}
                onChange={(e) =>
                  setInitialValues({
                    ...initialValues,
                    website: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.website}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("companyName")}
                isInvalid={
                  formik.touched.companyName && !!formik.errors.companyName
                }
                isValid={
                  formik.touched.companyName && !formik.errors.companyName
                }
                value={initialValues.companyName}
                onChange={(e) =>
                  setInitialValues({
                    ...initialValues,
                    companyName: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.companyName}
              </Form.Control.Feedback>
            </Form.Group>
            <ModalFooter>
              <Button variant="primary" onClick={handleUpdateStudent}>
                Update
              </Button>
              <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>
            </ModalFooter>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Students;
