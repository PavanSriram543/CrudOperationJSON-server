import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function Update() {
  // const [values, setData] = useState([]);
  const [values, setValues] = useState({
    name: "",
    house: "",
    gender: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/data/" + id, values)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-75 rounded bg-white border shadow p-4">
        <h1>Add user</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              House
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword2"
              value={values.house}
              onChange={(e) => setValues({ ...values, house: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">
              Gender
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword3"
              value={values.gender}
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
          <Link to="/">
            <button type="button" className="btn btn-secondary ">
              back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
