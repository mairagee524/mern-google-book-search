import React from "react";
import "./style.css"

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label className="search-name" htmlFor="Query">
          <strong>Book:</strong>
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
         <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="submit-btn"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;