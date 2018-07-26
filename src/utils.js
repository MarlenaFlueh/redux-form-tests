import React from "react";

export const onSubmitHandler = formProps => {
  console.log(formProps);
};

export const validate = values => {
  const errors = {};
  if (!values.zipcode) {
    errors.zipcode = "Required";
  } else if (values.zipcode.length !== 5) {
    errors.zipcode = "fünf Zeichen werden erwartet.";
  }
  if (!values.amount) {
    errors.amount = "Required";
  } else if (values.amount < 500 || values.amount > 32000) {
    errors.amount = "Menge zwischen 500 und 32000 Liter wird erwartet.";
  }
  return errors;
};

export const renderField = field => (
  <div>
    <label>{field.label}</label>
    <div>
      <input
        {...field.input}
        placeholder={field.placeholder}
        type={field.type}
      />
      {field.meta.touched &&
        field.meta.error && <small>{field.meta.error}</small>}
    </div>
  </div>
);
