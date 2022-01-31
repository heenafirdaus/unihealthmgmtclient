import axios from "axios";
import { useState } from "react";
import InfoCard from "../InfoCard/InfoCard";
import NotFound from "../NotFound";
import Search from "../Search";
import { useSelector } from "react-redux";
import { API_URL } from '../../config';

const Delete = () => {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  const [deleteResponse, setDeleteResponse] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const loginData = useSelector((state) => state.login);

  const handleChange = (e) => {
    setStudentId(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setTextMessage("");
    setDeleteResponse("");
    if (studentId) {
      const response = await axios.get(
        `${API_URL}/data/${studentId}`
      );
      setStudentData(response.data);
      if (response.data.length) {
        setTextMessage("We found the below data:");
      } else {
        setTextMessage("Sorry, we could not find what you are looking for!");
      }
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    if (studentId) {
      const token = loginData?.accessToken;
      try {
        const response = await axios.delete(
          `${API_URL}/data/${studentId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.data.success) {
          setDeleteSuccess(true);
          setDeleteResponse("Record deleted successfully!");
        }
      } catch (e) {
        if (e.response.status === 403 || e.response.status === 401) {
          setDeleteResponse("You are not allowed to delete the data!");
        }
      }
    }
  };
  return (
    <div className="delete row justify-content-center">
      <div className="d-flex justify-content-center col-12 mt-5">
        <h5>Search & Delete</h5>
      </div>
      <div className="search-container col-3">
        <Search
          handleChange={handleChange}
          handleButtonClick={handleSearch}
          placeholder={"Enter Student ID"}
        />
      </div>
      <div className="w-100"></div>
      {deleteResponse ? (
        <div className="mt-5">
          <h5 className={`${deleteSuccess ? "text-success" : "text-danger"}`}>
            {deleteResponse}
          </h5>
        </div>
      ) : (
        <div className="mt-5">
          <h4>{textMessage}</h4>
          {studentData.length ? (
            <InfoCard student={studentData[0]} handleDelete={handleDelete} />
          ) : (
            textMessage && <NotFound />
          )}
        </div>
      )}
    </div>
  );
};
export default Delete;
