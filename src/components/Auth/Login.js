import React from 'react';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './style.css';
import { Col, Row } from 'react-bootstrap';
import { GoogleOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className={"login-container p-3"}>
      <div className={"title-login-container pt-3"}>
        <span className={"title-login"}>
          Log in to findme
        </span>
      </div>
      <Col className={"p-2 mt-2"}>
        <Input className={"login-input"} size="large" placeholder="Email" />
      </Col>
      <Col className={"p-2"}>
        <Input.Password
          placeholder="Password"
          size="large"
          className={"login-input"}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Col>
      <Col className={"p-2"}>
        <Button className={"btn-login"} block>Login</Button>
      </Col>
      <Col className={"login-or-container "}>
        <p>OR</p>
      </Col>
      <div className={"btn-container mb-4 p-2"}>
        <Button block type="link" className={"login-btn shadow-sm"}><span className={"login-btn-text"}><div className={"title-btn"}><GoogleOutlined /> <div className={"ml-1"}> Continue with Google</div></div></span></Button>
      </div>
      <div className={"border-top p-2 mt-4 signup-link-container"}>
        <Link>
          <span>
            Can't log in?. Sign up for account
          </span>
        </Link>
      </div>
    </div >
  )
}
export default Login;