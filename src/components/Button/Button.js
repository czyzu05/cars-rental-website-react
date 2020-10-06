import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  buttonStyle: "btn--primary",
  buttonSize: "btn--medium",
};
export default Button;
