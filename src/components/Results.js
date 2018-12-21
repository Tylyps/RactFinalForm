import React from 'react';
import PropTypes from 'prop-types';

const Results = ({
  firstInput,
  secondInput,
  thirdInput,
  numberInput,
  singleDropdown,
  multiDropdown,
  checkbox,
  radio,
}) => (
  <div className="results">
    {console.log(
  firstInput,
  secondInput,
  thirdInput,
  numberInput,
  singleDropdown,
  multiDropdown,
  checkbox,
  radio,)}
    <div>First Input: <span>{firstInput}</span></div>
    <div>Secont Input: <span>{secondInput}</span></div>
    <div>Third Input: <span>{thirdInput}</span></div>
    <div>Number Input: <span>{numberInput}</span></div>
    <div>Single Dropdown:<br />
      <span>{`${singleDropdown.label}(Label) : ${singleDropdown.value}(Value)`}</span>
    </div>
    <div>Multio Dropdown:<ol>
      {multiDropdown.map(({label, value}) => (
        <li key={value}>
          {`${label}(Label) : ${value}(value)`}
        </li>
      ))}
    </ol></div>
    <div>Checkbox:<ol>
      {checkbox.map(value => (
        <li key={value}>
          {value}
        </li>
      ))}
    </ol></div>
    <div>Radio: <span>{radio}</span></div>
  </div>);


Results.defaultProps = {
  firstInput: '',
  secondInput: '',
  thirdInput: '',
  numberInput: '',
  singleDropdown: {},
  multiDropdown: [],
  checkbox: [],
  radio: '',
}

Results.propTypes = {
  firstInput: PropTypes.string,
  secondInput: PropTypes.string,
  thirdInput: PropTypes.string,
  numberInput: PropTypes.string,
  singleDropdown: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  multiDropdown: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  checkbox: PropTypes.arrayOf(PropTypes.string),
  radio: PropTypes.string,
}

export default Results;
