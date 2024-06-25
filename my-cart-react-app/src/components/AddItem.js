import React, { Component } from "react";

class AddItem extends Component {
  state = {};
  render() {
    return (
      <form className="row mb-5">
        <div className="mb-3 col-6">
          <label htmlFor="inputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input type="number" className="form-control" id="inputPrice" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddItem;
