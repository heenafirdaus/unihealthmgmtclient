import "./App.css";
import { useState, useEffect } from "react";
import hero from "./assets/hero.svg";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [role, setRole] = useState("");
  const [page, setPage] = useState("login");
  const history = useHistory();
  const loginData = useSelector((state) => state.login);

  const handleBackPress = (e) => {
    e.preventDefault();
    setRole(null);
  };

  useEffect(() => {
    if (loginData?.accessToken) {
      history.push(`/select-action/${loginData?.role}`);
    }
  }, [loginData, history]);

  const renderRoleSelector = () => {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div className="header">
            <h2 className="black-80 text-center">
              <strong>{page === "login" ? "Login as" : "Register as"}</strong>
            </h2>
          </div>
          <div className="button-container row mt-5">
            <div className="col-md-6 text-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setRole("admin");
                }}
              >
                Admin
              </button>
            </div>
            <div className="col-md-6 text-center">
              <button
                className="btn btn-warning"
                onClick={() => {
                  setRole("student");
                }}
              >
                Student
              </button>
            </div>
          </div>
        </div>
        {page === "login" ? (
          <div className="text-center d-flex mt-3">
            <p className="mr-1 mt-3"><small>New here?</small> </p>
            <button
              className="py-0 px-0 btn btn-link"
              onClick={() => setPage("signup")}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="text-center d-flex mt-3">
            <p className="mr-1 mt-3">Already signed up? </p>
            <button
              className="py-0 px-0 btn btn-link"
              onClick={() => setPage("login")}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    );
  };
  return (
    !loginData?.accessToken && (
      <div className="App">
        {/* <div className="header text-center">
        <h1>University Health Database Management System</h1>
      </div>
      */}
        <div className="hero-container row px-lg-5">
          <div className="col-md-6 left-box">
            <div>
              <div className="title mb-4 mt-5">
                <h1 className="text-white">
                  <strong>Student Health Database</strong>
                </h1>
                <h2 className="text-white">HKBK College of Engineering</h2>
              </div>
              <div className="description pb-4">
                <p className="text-white">
                  A one stop solution to maintain students' health data
                </p>
              </div>
            </div>
            <img className="hero-image mb-5" alt="Hospital" src={hero} />
          </div>
          <div className="login-container col-md-6">
            {role && page === "login" ? (
              <div className="login">
                <Login role={role} handleBackPress={handleBackPress} />
              </div>
            ) : role && page === "signup" ? (
              <div className="login">
                <SignIn role={role} handleBackPress={handleBackPress} />
              </div>
            ) : (
              <div className="role-sector">{renderRoleSelector()}</div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default App;
