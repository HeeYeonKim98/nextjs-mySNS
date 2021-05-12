import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

const CustomInput = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomInput;
