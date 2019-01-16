const validation = (values) => {
  const errors = {};

  if (!values.firstInput) {
    errors.firstInput = 'First Input cant be empty';
  }

  if (values.thirdInput && !Number(values.thirdInput)) {
    errors.thirdInput = 'Third Input must be a number';
  }

  return errors;
};

export default validation;
