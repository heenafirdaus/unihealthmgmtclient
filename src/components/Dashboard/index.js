import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Search";
import { API_URL } from "../../config";

const Dashboard = () => {
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_URL}/data/all`);
      setStudentData(response.data || []);
      setFilteredData(response.data || []);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const filtered = studentData.filter((student) => {
      if (
        student?.studentid?.toLowerCase().includes(lowerCaseSearchQuery) ||
        student?.name?.toLowerCase().includes(lowerCaseSearchQuery) ||
        student?.gender?.toLowerCase().includes(lowerCaseSearchQuery) ||
        student?.department?.toLowerCase().includes(lowerCaseSearchQuery) ||
        student?.semester?.toLowerCase().includes(lowerCaseSearchQuery) ||
        student?.bloodgroup?.toLowerCase().includes(lowerCaseSearchQuery) ||
        student?.knownallergies?.toLowerCase().includes(lowerCaseSearchQuery) ||
        student?.previousillness
          ?.toLowerCase()
          .includes(lowerCaseSearchQuery) ||
        student?.emergencyinfo?.toLowerCase().includes(lowerCaseSearchQuery)
      ) {
        return true;
      }
      return false;
    });
    setFilteredData(filtered);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setFilteredData(studentData);
  };

  return (
    <div className="dashboard row justify-content-center">
      <div className="row search-container col-3">
        <Search
          handleChange={handleChange}
          handleButtonClick={handleSearch}
          placeholder={"Search in database"}
          subtext={""}
        />
      </div>
      <table className="table mt-5 col-11">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Department</th>
            <th scope="col">Semester</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Known Allergies</th>
            <th scope="col">Previous Illness</th>
            <th scope="col">Vaccinations</th>
            <th scope="col">Emergency Info</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student, index) => {
            return (
              <tr key={index}>
                <th>{student.studentid}</th>
                <td>{student.name || "NA"}</td>
                <td>{student.age || "NA"}</td>
                <td>{student.gender || "NA"}</td>
                <td>{student.department || "NA"}</td>
                <td>{student.semester || "NA"}</td>
                <td>{student.bloodgroup || "NA"}</td>
                <td>{student.knownallergies || "NA"}</td>
                <td>{student.previousillness || "NA"}</td>
                <td>{student.vaccinations || "NA"}</td>
                <td>{student.emergencyinfo || "NA"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;
