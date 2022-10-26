import React, { Suspense } from "react";
import { Layout } from "antd";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import PrivateRoute from "./core/guards/PrivateRoute";
import Sidebar from "./components/layouts/Sidebar";
import useAuth from "./hooks/useAuth";
import Loading from "./components/modules/Loading";
import Footer from "./components/layouts/Footer";
import "./assets/scss/styles.scss";
import "react-slideshow-image/dist/styles.css";
const Account = React.lazy(() => import("./pages/Account"));
const Auth = React.lazy(() => import("./pages/Auth"));
const Features = React.lazy(() => import("./pages/Features"));

const { Header, Content } = Layout;

function App() {
  const { logout } = useAuth();

  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.name);

  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      >
        <Layout className="App">
          <div className="page-main">
            <Switch>
              <Route path="/auth">
                <Auth />
              </Route>
              <PrivateRoute path="/account">
                <Layout>
                  <Sidebar />
                  <Layout>
                    <Header>
                      <nav>
                        <ul className="nav-list">
                          <li className="nav-item">
                            <NavLink to="/account" className="avatar-info">
                              <img
                                className="avatar-img"
                                src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
                                alt="user-avatar"
                              />
                              <h4>{email}</h4>
                              <br />
                              <h4>{name}</h4>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/auth/login">
                              <FaSignOutAlt onClick={() => logout()} />
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </Header>
                    <Content>
                      <Account />
                    </Content>
                    <Footer />
                  </Layout>
                </Layout>
              </PrivateRoute>
              <PrivateRoute path="/">
                <Layout>
                  <Sidebar />
                  <Layout>
                    <Header>
                      <nav>
                        <ul className="nav-list">
                          <li className="nav-item">
                            <NavLink to="/account" className="avatar-info">
                              <img
                                className="avatar-img"
                                src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
                                alt="user-avatar"
                              />
                              <h4>{email}</h4>
                              <br />
                              <h4>{name}</h4>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/auth/login">
                              <FaSignOutAlt onClick={() => logout()} />
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </Header>
                    <Content style={{ margin: 8 }}>
                      <Features />
                    </Content>
                    <Footer />
                  </Layout>
                </Layout>
              </PrivateRoute>
            </Switch>
          </div>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
