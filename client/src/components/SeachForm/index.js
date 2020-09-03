import React from "react";
// import { Button } from '@chakra-ui/core';


function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          placeholder="Type Book Here"
          name="q"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          // variantColor="green"          
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;