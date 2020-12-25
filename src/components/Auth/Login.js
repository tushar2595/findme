import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./style.css";
import { Col, Row } from "react-bootstrap";
import { GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import apiManager from "../../apiManager/index";
import { connect } from "react-redux";
import {login} from '../../Service/index'


const Login = () => {
  const logintoapp = (values) => {
    console.log(values, "values");
    const data={
      "email":values.email,
      "password":values.password
    }
 login(data); 
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(2, "Minimum 2 characters")
        .email("Invalid email format.")
        .required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      logintoapp(values);
    },
  });
  return (
    <div className={"login-container p-5"}>
      <div className={"title-login-container pt-3"}>
        <span className={"title-login"}>Log in to findme</span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Col className={"p-2 mt-3"}>
          <Input
            className={"login-input"}
            size="large"
            placeholder="Email"
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className={"validations-errors"}>{formik.errors.email}</p>
          )}
        </Col>
        <Col className={"p-2"}>
          <Input
            placeholder="Password"
            size="large"
            name={"password"}
            value={formik.values.password}
            className={"login-input"}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className={"validations-errors"}>{formik.errors.password}</p>
          )}
        </Col>
        <Col className={"p-2"}>
          <Button className={"btn-login"} htmlType={"submit"} block>
            Login
          </Button>
        </Col>
      </form>
      <Col className={"login-or-container "}>
        <p>OR</p>
      </Col>
      <div className={"btn-container mb-4 p-2"}>
        <Button block type="link" className={"login-btn shadow-sm"}>
          <span className={"login-btn-text"}>
            <div className={"title-btn"}>
              <GoogleOutlined />{" "}
              <div className={"ml-1"}> Continue with Google</div>
            </div>
          </span>
        </Button>
      </div>
      <div className={"border-top p-2 mt-4 signup-link-container"}>
        <Link>
          <span>Can't log in?. Sign up for account</span>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};



export default connect(mapStateToProps)(Login);
