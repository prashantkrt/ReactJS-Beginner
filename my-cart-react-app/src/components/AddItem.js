import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        productName:"",
        productPrice:0
    };
  }  
  render() {
    return (
      <form className="row mb-5"  onSubmit={(e) => {
        e.preventDefault();
        this.props.addItem(this.state.productName,Number(this.state.productPrice));
      }}>
        <div className="mb-3 col-6">
          <label htmlFor="inputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(event)=>{
                this.setState({productName : event.currentTarget.value});
              }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            onChange={(event)=>{
              this.setState({productPrice : Number(event.currentTarget.value)});
            }}
            value={this.state.productPrice}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"          
        >
          Add Product
        </button>
      </form>
    );
  }
}

export default AddItem;
