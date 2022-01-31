import { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Search from "../Search";
import Form from "./Form";
import { useSelector } from "react-redux";
import {API_URL} from '../../config';

const Edit = () => {
  const [state, setState] = useState({
    studentid: "",
    name: "",
    age: "",
    gender: "",
    department: "",
    semester: "",
    bloodgroup: "",
    knownallergies: "",
    previousillness: "",
    vaccinations: "",
    emergencyinfo: "",
    loginRole: "",
    canEditForm: false,
    showForm: false,
    errorMessage: "",
    successMessage: "",
  });
  const history = useHistory();
  const params = useParams();
  const loginData = useSelector((state) => state.login);

  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.id]: e.target.value }));
  };

  const fetchData = useCallback(async () => {
    if (state.studentid) {
      try {
        const response = await axios.get(
          `${API_URL}/data/${state.studentid}`
        );
        if (response.data.length) {
          setState((state) => ({
            ...state,
            ...response.data[0],
            errorMessage: "",
            showForm: true,
            successMessage: "",
          }));
        } else {
          setState((state) => ({
            ...state,
            errorMessage: "Sorry, could not find the data you are looking for!",
            successMessage: "",
          }));
        }
      } catch (e) {
        setState((state) => ({
          ...state,
          errorMessage: `${
            e.response.data.message ||
            "Sorry, could not find the data you are looking for!"
          }`,
          successMessage: "",
        }));
      }
    }
  }, [state.studentid]);

  useEffect(() => {
    const role = loginData?.role || "";
    setState((state) => ({ ...state, loginRole: role }));
    if (state.loginRole === "admin") {
      setState((state) => ({ ...state, canEditForm: true }));
    }
    if (params.studentid) {
      setState((state) => ({
        ...state,
        studentid: params.studentid,
        canEditForm: true,
        showForm: true,
      }));
      fetchData();
    }
  }, [
    state.loginRole,
    state.canEditForm,
    params.studentid,
    loginData,
    fetchData,
  ]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = loginData?.accessToken;
    try {
      const response = await axios.put(
        `${API_URL}/data/${state.studentid}`,
        state,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setState((state) => ({
          ...state,
          successMessage: "Successfully updated the data!",
          errorMessage: "",
          showForm: false,
        }));
      }
    } catch (e) {
      setState((state) => ({
        ...state,
        errorMessage: `${
          e.response.data.message ||
          "Sorry, could not update the data at this time!"
        }`,
      }));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="row justify-content-center">
      <div className="d-flex justify-content-center col-12 mt-5">
        <h5>Search & Edit</h5>
      </div>
      {!params.studentid && (
        <div className="search-container col-3">
          <Search
            handleChange={handleChange}
            handleButtonClick={handleSearch}
            placeholder={"Enter Student ID"}
            id={"studentid"}
          />
        </div>
      )}
      <div className="w-100"></div>
      {state.successMessage && !state.errorMessage && (
        <div className="mt-5 text-center">
          <h5 className="text-success">{state.successMessage}</h5>
          <button
            className="btn btn-primary"
            onClick={() => {
              history.push("/dashboard");
            }}
          >
            Go to dashboard
          </button>
        </div>
      )}
      {state.errorMessage && !state.successMessage && (
        <div className="mt-5">
          <h5 className="text-danger">{state.errorMessage}</h5>
        </div>
      )}
      {!state.errorMessage && state.showForm && (
        <Form
          state={state}
          handleChange={handleChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};
export default Edit;
