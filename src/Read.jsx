import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/data/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="card" width=" 18rem">
      <div className="card-body">
        <h5 className="card-title">User Details</h5>
        <div className="mb-2">
          <strong>Name:{data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>ID:{data.id}</strong>
        </div>
        <div className="mb-3">
          <strong>House:{data.house}</strong>
        </div>
        <Link to={`/update/${data.id}`}>
          <button type="button" className="btn btn-secondary me-2">
            edit
          </button>
        </Link>{" "}
        <Link to="/">
          <button type="button" className="btn btn-info me-2">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Read;
