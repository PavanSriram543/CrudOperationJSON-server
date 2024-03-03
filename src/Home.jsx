import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handelDelete = (id) => {
    axios
      .delete("http://localhost:3000/data/" + id)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of users</h1>

      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create">
            <button type="button" className="btn btn-secondary me-2">
              Add +
            </button>
          </Link>
        </div>
        <table className="table table-stipend">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">House</th> <th scope="col">gender</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((d, index) => (
              <tr key={d.index}>
                <th scope="row">{index}</th>
                <td>{d.name}</td>
                <td>{d.house}</td>
                <td>{d.gender}</td>
                <td>
                  <Link to={`/read/${d.id}`}>
                    <button type="button" className="btn btn-info me-2">
                      Read
                    </button>
                  </Link>

                  <Link to={`/update/${d.id}`}>
                    <button type="button" className="btn btn-secondary me-2">
                      Update
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(e) => handelDelete(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
