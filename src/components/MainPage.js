import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import cn from 'classnames';
import Logo from './Logo';
import Input from './Input';
import DropDownSelect from './Select';
import ListInputs from './ListInputs';

const validation = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'First name cant be empty'
  }

  if (!values.bio) {
    errors.bio = 'Bio cant be empty'
  }

  return errors
}

class MainPage extends Component {
  state = {
    test: true,
  };

  favoriteColor = [
    {
      value:"SingleDropdownOption#1",
      label: 'Single Dropdown Option #1'
    },
    {
      value:"SingleDropdownOption#2",
      label: 'Single Dropdown Option #2'
    },
    {
      value:"SingleDropdownOption#3",
      label: 'Single Dropdown Option #3'
    }
  ];

  food = [
    {
      value:"MultiDropdownOption#1",
      label: 'Multi Dropdown Option #1'
    },
    {
      value:"MultiDropdownOption#2",
      label: 'Multi Dropdown Option #2'
    },
    {
      value:"MultiDropdownOption#3",
      label: 'Multi Dropdown Option #3'
    },
    {
      value:"MultiDropdownOption#4",
      label: 'Multi Dropdown Option #4'
    },
    {
      value:"MultiDropdownOption#5",
      label: 'Multi Dropdown Option #5'
    },
    {
      value:"MultiDropdownOption#6",
      label: 'Multi Dropdown Option #6'
    }
  ];

  checkbox = [
    {
      value:"BoxCheckbox#1",
      label: 'Box Checkbox #1'
    },
    {
      value:"BoxCheckbox#2",
      label: 'Box Checkbox #2'
    },
    {
      value:"BoxCheckbox#3",
      label: 'Box Checkbox #3'
    },
    {
      value:"BoxCheckbox#4",
      label: 'Box Checkbox #4'
    },
  ];

  radio = [
    {
      value:"RadioCheckbox#1",
      label: 'Radio Checkbox #1'
    },
    {
      value:"RadioCheckbox#2",
      label: 'Radio Checkbox #2'
    },
    {
      value:"RadioCheckbox#3",
      label: 'Radio Checkbox #3'
    },
  ];

  onSubmit = test => {
    console.log(test);
  }

  toggleButtonDisable = () => this.setState(prevState => ({disableButton: !prevState.disableButton}));

  render() {
    const {
      test,
    } = this.state;

    return (
      <div className="center-component">
        <Link to="/test" onClick={this.toggleCounter}>
          <Logo />
        </Link>
        {test &&
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
                      name="firstName"
                      component="input"
                      placeholder="First Name"
                      label="First Name"
                    />
                  </div>
                  <div>
                    <Input
                      name="bio"
                      label="Bio"
                      placeholder="Bio"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      label="Phone"
                      placeholder="Phone"
                      type="number"
                    />
                  </div>
                  <div>
                    <DropDownSelect
                      label="Select Input single color"
                      name="favoriteColor"
                      options={this.favoriteColor}
                    />
                  </div>
                  <div>
                    <DropDownSelect
                      label="Select Input multi food"
                      name="food"
                      options={this.food}
                      closeOnSelect={false}
                      isMulti
                    />
                  </div>
                  <div>
                    <ListInputs
                      label="Select Input multi food"
                      name="checkbox"
                      list={this.checkbox}
                    />
                  </div>
                  <div>
                    <ListInputs
                      label="Select Input multi food"
                      name="radio"
                      list={this.radio}
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
      </div>
    );
  };
};

export default MainPage;
