import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const SelectPage = (props) => {
  const history = useHistory();
  const loginData = useSelector((state) => state.login);

  const navigateTo = (path) => {
    history.push(`${path}`);
  };

  return loginData.isLoggedIn && loginData.role === "admin" ? (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-12 text-center">
        <h4>
          <strong>You have the following authorizations: </strong>
        </h4>
      </div>
      <div className="col-sm-3 mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" style={{ height: "50px" }}>
              <strong>Find Student Information</strong>
            </h5>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigateTo("/dashboard");
              }}
            >
              Go to dashboard
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" style={{ height: "50px" }}>
              <strong>Modify/Update Student Information</strong>
            </h5>
            <button
              className="btn btn-warning"
              onClick={() => {
                history.push("/update");
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" style={{ height: "50px" }}>
              <strong>Delete Student Information</strong>
            </h5>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.push("/delete");
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : loginData.isLoggedIn && loginData.role === "student" ? (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-12 text-center">
        <h4>
          <strong>You have the following authorizations: </strong>
        </h4>
      </div>
      <div className="col-sm-5 mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" style={{ height: "50px" }}>
              <strong>Find Student Information</strong>
            </h5>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigateTo("/dashboard");
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-5 mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" style={{ height: "50px" }}>
              <strong>Edit your information</strong>
            </h5>
            <button
              className="btn btn-warning"
              onClick={() => {
                navigateTo(`/update/${loginData.userid}`);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default SelectPage;
