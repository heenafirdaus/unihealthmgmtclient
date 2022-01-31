import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { loginSuccess } from "../../redux/loginreducers";
import { useDispatch } from "react-redux";
import { setStoreData } from "../../utils/storage";
import { API_URL } from "../../config";

const Login = ({ role, handleBackPress }) => {
  const [userid, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login/${role}`, {
        userid,
        password,
      });
      const storageData = {
        accessToken: response.data.accessToken,
        role: response.data.role,
        isLoggedIn: response.data.isLoggedIn,
        userid: response.data.userid,
        name: response.data.name,
      };
      setStoreData("loginData", storageData);
      dispatch(loginSuccess(storageData));
      history.push(`/select-action/${role}`);
    } catch (e) {
      if (e?.response?.status === 400 || e?.response?.status === 401) {
        setErrorMessage(e.response.data.message);
      } else {
        throw e;
      }
    }
  };

  return (
    <>
      <div style={{ marginLeft: "40px" }}>
        <button className="btn btn-outline-dark text" onClick={handleBackPress}>
          Back
        </button>
      </div>
      <div className="form row justify-content-md-center">
        <form className="col-sm-10" method="POST" onSubmit={login}>
          <div className="mt-2 mb-3">
            <h2 className="black-80">
              Hello there, enter credentials to login
            </h2>
          </div>
          <div className="form-group">
            <label htmlFor="userId">
              {role === "admin" ? "Admin" : "Student"} ID
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              aria-describedby="userIdHelp"
              placeholder={`Enter ${role === "admin" ? "Admin" : "Student"} ID`}
              onChange={(e) => setUsername(e.target.value)}
              name="userid"
              value={userid}
            />
            <small id="userIdHelp" className="form-text text-muted">
              We'll never share your data with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </div>
          <small className="text-danger">{errorMessage}</small>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
