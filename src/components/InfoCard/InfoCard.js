const InfoCard = ({ student, handleDelete }) => {
  const {
    studentid,
    name,
    age,
    gender,
    department,
    semester,
    bloodgroup,
    knownallergies,
    previousillness,
    vaccinations,
    emergencyinfo,
  } = student;
  return (
    <>
      <div className="info-card col-sm-12">
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Student ID: </strong>
              {studentid}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>Name: </strong>
              {name}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Age: </strong>
              {age}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>Gender: </strong>
              {gender}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Department: </strong>
              {department}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>Semester: </strong>
              {semester}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>
              <strong>Blood Group: </strong>
              {bloodgroup}
            </p>
          </div>
          <div className="col-sm-12">
            <p>
              <strong>Known Allergies: </strong>
              {knownallergies}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>
              <strong>Previous Illness: </strong>
              {previousillness}
            </p>
          </div>
          <div className="col-sm-12">
            <p>
              <strong>Vaccinations: </strong>
              {vaccinations}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>
              <strong>Emergency Info: </strong>
              {emergencyinfo}
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default InfoCard;
