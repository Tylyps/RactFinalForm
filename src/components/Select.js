import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Field } from 'react-final-form';
import Select from 'react-select';

const DropDownSelect = ({
  className,
  id,
  inputRef,
  label,
  name,
  touched,
  options,
  closeOnSelect,
  ...rest
}) => {
  const inputId = id || `${name}-input`

  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <div className="form-control">
          {label !== false &&
            <label htmlFor={inputId}>{label || name}</label>
          }
          <Select
            ref={inputRef}
            id={inputId}
            name={name}
            className={cn(className, { 'is-invalid': meta.error && meta.touched })}
            options={options}
            closeMenuOnSelect={closeOnSelect}
            {...input}
            {...rest}
          />
          {meta.touched && meta.error && <p className="input-error">{meta.error}</p>}
        </div>
      )}
    />
  );
};


DropDownSelect.defaultProps = {
  className: '',
  error: '',
  id: '',
  label: '',
  touched: false,
  inputRef: null,
  closeOnSelect: true,
}

DropDownSelect.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.shape({}),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  type: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired
}

export default DropDownSelect;
