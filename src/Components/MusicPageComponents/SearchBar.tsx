import "bootstrap/dist/css/bootstrap.css";
export default function SearchBar() {
  return (
    <>
      <nav data-bs-theme="dark" className="navbar bg-body-primary ">
        <form className="container-fluid">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              //
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Our API"
              aria-label="Search Our API"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </nav>
    </>
  );
}
