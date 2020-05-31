import React from "react";

function Length(props) {
  const { onHandleLength, passlength } = props;
  return (
    <div className="form-group row">
      <label htmlFor="pasword" className="col-sm-9 col-form-label">
        Password Length
      </label>
      <div className="col-sm-3">
        <input
          type="number"
          className="form-control"
          placeholder={passlength}
          aria-label=""
          id="password"
          name="password"
          min="8"
          max="16"
          onChange={onHandleLength}
          autoFocus
        ></input>
      </div>
    </div>
  );
}

export default Length;
