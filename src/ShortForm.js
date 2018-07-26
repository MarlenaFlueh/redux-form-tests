import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import * as utils from "./utils";

const Container = styled.form`
  width: 10%;
  margin: auto;
  border: 1px solid black;
  padding: 5%;
`;

const LandingPageForm = props => {
  const { handleSubmit } = props;
  return (
    <Container onSubmit={handleSubmit(utils.onSubmitHandler)}>
      <Field
        label="Postleitzahl"
        name="zipcode"
        component={utils.renderField}
        type="text"
        placeholder="21339"
      />
      <Field
        label="Menge"
        name="amount"
        component={utils.renderField}
        type="number"
        placeholder="3000"
      />
      <div>
        <button type="submit">Preisvergleich</button>
      </div>
    </Container>
  );
};

export default reduxForm({
  form: "landingPage",
  validate: utils.validate,
  destroyOnUnmount: false
})(LandingPageForm);
