const Form = ({ state, handleChange, handleFormSubmit }) => {
  return (
    <form className="mt-5">
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="studentid">
            <strong>Student ID</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="studentid"
            value={state.studentid}
            disabled
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="age">
            <strong>Age</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Age"
            onChange={handleChange}
            value={state.age}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="gender">
            <strong>Gender</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter Gender"
            onChange={handleChange}
            value={state.gender}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="department">
            <strong>Department</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            placeholder="Enter Department"
            onChange={handleChange}
            value={state.department}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="semester">
            <strong>Semester</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="semester"
            placeholder="Enter Semester"
            onChange={handleChange}
            value={state.semester}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="bloodgroup">
            <strong>Blood Group</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="bloodgroup"
            placeholder="Enter Blood Group"
            onChange={handleChange}
            value={state.bloodgroup}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="knownallergies">
            <strong>Known Allergies</strong>
          </label>
          <textarea
            type="text"
            className="form-control"
            id="knownallergies"
            placeholder="Enter Known Allergies"
            onChange={handleChange}
            value={state.knownallergies}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="previousillness">
            <strong>Previous Illness</strong>
          </label>
          <textarea
            type="text"
            className="form-control"
            id="previousillness"
            placeholder="Enter Previous Illness"
            onChange={handleChange}
            value={state.previousillness}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="vaccinations">
            <strong>Vaccinations</strong>
          </label>
          <textarea
            type="text"
            className="form-control"
            id="vaccinations"
            placeholder="Enter Vaccinations"
            onChange={handleChange}
            value={state.vaccinations}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="emergencyinfo">
            <strong>Emergency Info</strong>
          </label>
          <textarea
            type="text"
            className="form-control"
            id="emergencyinfo"
            placeholder="Enter Emergency Info"
            onChange={handleChange}
            value={state.emergencyinfo}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
        Update
      </button>
    </form>
  );
};
export default Form;
