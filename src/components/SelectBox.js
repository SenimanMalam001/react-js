import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const SelectBox = (props) => {
  const { value, name, handleChange, label, placeholder, options } = props
  return (
    <div className="form-group">
      <label>{label}</label>
       <Select
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default SelectBox
