export const required = value => value ? undefined : "This input is Required";

export const min10 = value => value >= 10 || !value ? undefined : "Value must be greater than 10"
