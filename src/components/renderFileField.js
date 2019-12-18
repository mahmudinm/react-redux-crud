import React from 'react';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const renderFileField = ({ 
  label,
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: { touched, error, warning }, 
  ...props 
}) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...props.input}
        {...props}
      />
      {touched && ((error && <div className="invalid-feedback" >{error}</div>))}
    </div>
  );
};