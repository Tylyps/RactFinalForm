import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Field } from 'react-final-form';

const Input = ({
  className,
  id,
  inputRef,
  label,
  name,
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
          <input
            ref={inputRef}
            id={inputId}
            name={name}
            className={cn(className, { 'is-invalid': meta.error && meta.touched })}
            {...input}
            {...rest}
          />
          {meta.touched && meta.error && <p className="input-error">{meta.error}</p>}
        </div>
      )}
    />
  );
};


Input.defaultProps = {
  className: '',
  id: '',
  label: '',
  type: 'text',
  inputRef: null,
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.shape({}),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Input;
