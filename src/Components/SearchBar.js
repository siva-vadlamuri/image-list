import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  handleChange = (e)=>{
   const {value} = e.target;
   this.setState({searchTerm:value})
  }
  handleSubmit = (e)=>{
      e.preventDefault();
      this.props.searchSubmit(this.state.searchTerm);
      this.setState({searchTerm: ''})
  }
  render() {
    return (
      <div>
        <form className="text-center m-5" onSubmit={this.handleSubmit} >
          <input
            type="text"
            className="form-control w-25 d-inline"
            placeholder="Enter some Product Name"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit" className="m-3 my-sm-3  btn btn-primary">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
