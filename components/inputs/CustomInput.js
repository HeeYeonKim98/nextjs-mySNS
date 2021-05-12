import React from "react";
import { Input } from "antd";

const CustomInput = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default CustomInput;
