import { Layout, Menu } from "antd";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiBookLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

function Sidebar() {
  const location = useLocation();

  return (
    <>
      <Sider className="navbar">
        <NavLink exact to="/" className="logo">
          <img
            src="data:image/jpeg;base64,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"
            alt="logo-img"
            className="logo-img"
          />
        </NavLink>
        <Menu
          className="navbar-menu"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
          items={[
            {
              className: "sidebar-item",
              key: "/",
              icon: <AiFillHome />,
              label: (
                <NavLink activeClassName="" to="/">
                  Home
                </NavLink>
              ),
            },
            {
              className: "sidebar-item",
              key: "/book-management",
              icon: <RiBookLine />,
              label: (
                <NavLink activeClassName="" to="/book-management">
                  Book Management
                </NavLink>
              ),
            },
            {
              className: "sidebar-item",
              key: "/account",
              icon: <FaUserAlt />,
              label: (
                <NavLink activeClassName="" to="/account">
                  User Admin
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>
    </>
  );
}

export default Sidebar;
