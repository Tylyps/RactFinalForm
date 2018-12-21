import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const ListInputs = ({
  name,
  label,
  list,
  isSingleChoose,
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
  name: '',
  label: '',
  list: [],
  isSingleChoose: false,
}

ListInputs.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  isSingleChoose: PropTypes.bool,
}

export default ListInputs;
