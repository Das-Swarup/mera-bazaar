import React from "react";

export default function Join() {
  return (
    <div>
      <center>
        <h1>Join Us!</h1>
      </center>
      <form className="px-5 container" style={{ maxWidth: "700px" }}>
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputNumber" className="form-label">
            Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputNumber"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputRef" className="form-label">
            Referral Code
          </label>
          <input type="text" className="form-control" id="exampleInputRef" />
        </div>
        <center>
          <button type="submit" className="btn btn-lg btn-dark">
            Submit
          </button>
        </center>
      </form>
    </div>
  );
}
