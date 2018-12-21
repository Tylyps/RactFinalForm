import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import Logo from './Logo';
import Input from './Input';
import DropDownSelect from './Select';
import ListInputs from './ListInputs';
import Results from './Results';
import {
  SINGLE_DROPDOWN_OPTIONS,
  MULTI_DROPDOWN_OPTIONS,
  BOX_CHECKBOX_OPTIONS,
  RADIO_CHECKBOX_OPTIONS,
} from '../helpers/constatns';
import { validation } from '../helpers/validation';

class MainPage extends Component {
  state = {
    isSubmited: false,
    results: {},
  };

  onSubmit = results => {
    console.log(results);
    this.setState({ isSubmited: true, results });
  }

  toogleResultsAndForm = () => this.setState(prevState => ({isSubmited: !prevState.isSubmited}));

  render() {
    const {
      isSubmited,
      results,
    } = this.state;

    return (
      <div className="center-component">
        <Link to="/test" onClick={this.toogleResultsAndForm}>
          <Logo />
        </Link>
        {!isSubmited &&
        <div>
          <Form
            onSubmit={this.onSubmit}
            validate={validation}
            render={({
              handleSubmit,
              submitting,
            }) => (
              <div className="center-component">
                <h2>Simple React Final Form</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Input
                      name="firstInput"
                      placeholder="First Input"
                      label="First Input"
                    />
                  </div>
                  <div>
                    <Input
                      name="secondInput"
                      label="Second Input"
                      placeholder="Second Input"
                    />
                  </div>
                  <div>
                    <Input
                      name="thirdInput"
                      label="Third Input (should be number)"
                      placeholder="Third Input"
                    />
                  </div>
                  <div>
                    <Input
                      name="numberInput"
                      label="Number Input"
                      placeholder="Number Input"
                      type="number"
                    />
                  </div>
                  <div>
                    <DropDownSelect
                      label="Single Dropdown"
                      name="singleDropdown"
                      options={SINGLE_DROPDOWN_OPTIONS}
                    />
                  </div>
                  <div>
                    <DropDownSelect
                      label="Multi Dropdown"
                      name="multiDropdown"
                      options={MULTI_DROPDOWN_OPTIONS}
                      closeOnSelect={false}
                      isMulti
                    />
                  </div>
                  <div>
                    <ListInputs
                      label="Checkbox Input"
                      name="checkbox"
                      list={BOX_CHECKBOX_OPTIONS}
                    />
                  </div>
                  <div>
                    <ListInputs
                      label="Radio Checkbox Input"
                      name="radio"
                      list={RADIO_CHECKBOX_OPTIONS}
                      isSingleChoose
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-green"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          />
        </div>
        }
        {isSubmited &&
          <Results
            {...results}
          />}
      </div>
    );
  };
};

export default MainPage;
