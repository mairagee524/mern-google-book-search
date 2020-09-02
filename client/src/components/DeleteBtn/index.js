import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn({ type = "default", className, children, onClick }) {
  return (
      <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
          {children}
      </button>
  );
}

export default DeleteBtn;
