import { Input } from "antd";
import React from "react";

const CustomInput = ({ label, type, name, value, onChange }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Input type={type} name={name} value={value} onChange={onChange} />
  </div>
);

export default CustomInput;
