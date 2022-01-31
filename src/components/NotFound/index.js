import hero from "../../assets/404.svg";
const NotFound = () => {
  return (
    <div className="row justify-content-center" style={{height: '90vh'}}>
      <div className="col-sm-6 my-auto">
        <img className="error-image" alt="Error" src={hero} />
      </div>
    </div>
  );
};
export default NotFound;
