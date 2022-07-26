import React from "react";
import Logo from "@/assets/img/freightos.svg";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
const Header = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="wrapper-logo">
            <img src={Logo} className="logo" alt="logo" />
          </div>
          <div className="authentication">
            <Button type="primary" className="btn-authent" icon={<UserOutlined />} >Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
