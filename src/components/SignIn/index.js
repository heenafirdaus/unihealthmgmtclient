import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../config";


const SignIn = ({ role, handleBackPress }) => {
  const [studentid, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [userid, setUserId] = useState("");
  const [uniid, setUniId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let response;
      setErrorMessage("");
      setSuccessMessage("");
      if (role === "admin") {
        response = await axios.post(`${API_URL}/register/admin`, {
          userid,
          name,
          password,
          uniid,
        });
      }
      if (role === "student") {
        response = await axios.post(`${API_URL}/register/student`, {
          studentid,
          name,
          password,
          age,
          gender,
          semester,
          department,
        });
      }
      if (response?.data?.success) {
        setSuccessMessage(response.data.message);
      }
    } catch (e) {
      setSuccessMessage("");
      setErrorMessage(e?.response?.data?.message || "Something went wrong!");
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
        <form className="col-sm-10" method="POST" onSubmit={handleRegister}>
          <div className="mt-3 mb-3">
            <h2 className="black-80">Enter details to register</h2>
          </div>
          {role === "student" ? (
            <>
              <div className="form-row">
                <div className="col-4">
                  <label htmlFor="studentid">
                    Student ID<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentid"
                    aria-describedby="userIdHelp"
                    placeholder={`Enter Student ID`}
                    onChange={(e) => {
                      setStudentId(e.target.value);
                    }}
                    name="studentid"
                    value={studentid}
                  />
                </div>
                <div className="col-8">
                  <label htmlFor="inputName">
                    Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Enter Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    value={name}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col">
                  <label htmlFor="inputPassword">
                    Password<sup>*</sup>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Enter Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    value={password}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-6">
                  <label htmlFor="inputAge">Age</label>
                  <input
                    type="age"
                    className="form-control"
                    id="inputAge"
                    placeholder="Enter Age"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                    name="age"
                    value={age}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="inputGender">Gender</label>
                  <input
                    type="gender"
                    className="form-control"
                    id="inputGender"
                    placeholder="Enter Gender"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    name="gender"
                    value={gender}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-6">
                  <label htmlFor="inputDepartment">
                    Department<sup>*</sup>
                  </label>
                  <input
                    type="department"
                    className="form-control"
                    id="inputDepartment"
                    placeholder="Enter Department"
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                    name="department"
                    value={department}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="inputSemester">
                    Semester <sup>*</sup>
                  </label>
                  <input
                    type="semester"
                    className="form-control"
                    id="inputSemester"
                    placeholder="Enter Semester"
                    onChange={(e) => {
                      setSemester(e.target.value);
                    }}
                    name="semester"
                    value={semester}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="form-row">
                <div className="col-6">
                  <label htmlFor="userid">
                    User ID<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userid"
                    placeholder={`Enter User ID`}
                    onChange={(e) => {
                      setUserId(e.target.value);
                    }}
                    name="userid"
                    value={userid}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="uniid">
                    University ID<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="uniid"
                    placeholder={`Enter University ID`}
                    onChange={(e) => {
                      setUniId(e.target.value);
                    }}
                    name="uniid"
                    value={uniid}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col">
                  <label htmlFor="inputName">
                    Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Enter Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    value={name}
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col">
                  <label htmlFor="inputName">
                    Password<sup>*</sup>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputName"
                    placeholder="Enter Name"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    value={password}
                  />
                </div>
              </div>
            </>
          )}
          {errorMessage && (
            <small className="text-danger">{errorMessage}</small>
          )}
          {successMessage && (
            <small className="text-success">{successMessage}</small>
          )}
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;
