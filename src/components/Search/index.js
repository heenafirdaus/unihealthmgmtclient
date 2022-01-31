const Search = ({ handleChange, handleButtonClick, placeholder, id }) => {
  return (
    <>
      <form className="col-10 form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            onChange={handleChange}
            id={id}
          />

          <button
            type="submit"
            className="btn btn-primary ml-5"
            onClick={handleButtonClick}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};
export default Search;
