import React from 'react';

// ReduxForm custom field untuk sync validasi / validasi secara langsung
export const renderSelectField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  children
}) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
      <select {...input} 
        className={
          touched && error ? 'form-control is-invalid' : 'form-control'
        }>
        {children}
      </select>
      {touched && ((error && <div className="invalid-feedback" >{error}</div>))}
  </div>
)