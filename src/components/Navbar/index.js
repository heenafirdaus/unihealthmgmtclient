import { Link, useHistory } from "react-router-dom";
import logo from "../../icons/logo.jpg";
import { removeStorageData } from "../../utils/storage";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/loginreducers";

const Navbar = () => {
  const history = useHistory();
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogout = () => {
    removeStorageData("loginData");
    dispatch(logout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="LOGO" height={60} width={60} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          {loginData?.accessToken && (
            <>
              <li className="nav-item">
                <Link
                  className={`nav-link`}
                  to={`${
                    loginData?.role === "admin"
                      ? "/update"
                      : `/update/${loginData?.userid}`
                  }`}
                >
                  Edit <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    cursor: `${
                      loginData?.role === "student" ? "default" : "pointer"
                    }`,
                  }}
                  className={`nav-link ${
                    loginData?.role === "student" ? "disabled" : ""
                  }`}
                  to={`${loginData?.role === "admin" ? "/delete" : ""}`}
                  onClick={(e) => {
                    if (loginData?.role === "student") {
                      e.preventDefault();
                    }
                  }}
                >
                  Delete <span className="sr-only">(current)</span>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="navbar-nav">
          <li className="nav-item row">
            {loginData?.isLoggedIn ? (
              <>
                <div className="d-flex align-items-center mr-5">
                  <p className="my-auto">
                    <strong>Welcome {loginData?.name.split(" ")[0]}</strong>
                  </p>
                </div>
                <button className="btn btn-warning" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : null}
          </li>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
