import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const ListInputs = ({
  className,
  id,
  inputRef,
  name,
  touched,
  label,
  list,
  isSingleChoose,
  ...rest
}) => (
  <div className="form-control" style={{display: 'flex', flexDirection: 'column'}}>
    <label>{label}</label>
    {list.map(({value, label}) => (
    <div key={value}>
      <label>
        <Field
          name={name}
          component="input"
          type={isSingleChoose ? 'radio' : 'checkbox'}
          value={value}
        />{' '}
        {label}
      </label>
    </div>
  ))}
  </div>);


ListInputs.defaultProps = {
  className: '',
  id: '',
  touched: false,
  type: 'text',
  inputRef: null,
  isSingleChoose: false,
}

ListInputs.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  type: PropTypes.string,
  isSingleChoose: PropTypes.bool,
}

export default ListInputs;
