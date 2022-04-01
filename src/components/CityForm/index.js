const CityForm = () => {
  return (
    <div id="left-side" className="col-12 col-md-4 col-lg-3 mt-3 p-1">
      <form id="cityForm" action="" method="get" className="citySearch p-3 lint">
        {/* <!-- Search for City  --> */}
        <div className="citySearch lint">
          <label htmlFor="search" className="lint">
            <h2 className="lint">Search for City</h2>
          </label>
          <input
            className="col-12 lint"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Minneapolis"
          />
        </div>
        <div className="citySearch">
          <input className="col-12 baby-blue" type="submit" value="Search City" />
        </div>
      </form>
      {/* <!-- Recent Search Buttons --> */}
      <div id="recent-searches" className="p-3">
        <p></p>
      </div>
    </div>
  );
};

export default CityForm;