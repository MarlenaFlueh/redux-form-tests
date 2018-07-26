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

const LandingPageForm = ({ handleSubmit }) => {
  return (
    <Container onSubmit={handleSubmit(utils.onSubmitHandler)}>
      <div>
        <label>Postleitzahl</label>
        <div>
          <Field
            name="zipcode"
            component={utils.renderField}
            type="text"
            placeholder="21339"
          />
        </div>
      </div>
      <div>
        <label>Menge</label>
        <div>
          <Field
            name="amount"
            component={utils.renderField}
            type="number"
            placeholder="3000"
          />
        </div>
      </div>
      <div>
        <label>Entladestelle</label>
        <div>
          <Field name="unloadingpoints" component="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Heizölsorte</label>
        <div>
          <Field name="product" component="select">
            <option value="Normal Schwefelarm">Normal Schwefelarm</option>
            <option value="Premium">Premium</option>
            <option value="Bio 10">Bio 10</option>
            <option value="Premium Bio 10">Premium Bio 10</option>
            <option value="Bio 15">Bio 15</option>
            <option value="Klimaneutral">Klimaneutral</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Zahlart</label>
        <div>
          <Field name="payment" component="select">
            <option value="Barzahlung">Barzahlung</option>
            <option value="EC-Karte">EC-Karte</option>
            <option value="Vorkasse">Vorkasse</option>
            <option value="Lastschrift">Lastschrift</option>
            <option value="Wärme Konto">Wärme Konto</option>
            <option value="Rechnung">Rechnung</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Tankwagen</label>
        <div>
          <Field name="vehicle" component="select">
            <option value="egal">egal</option>
            <option value="kleiner Tankwagen">kleiner Tankwagen</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Schlauchlänge</label>
        <div>
          <Field name="hose" component="select">
            <option value="egal">egal</option>
            <option value="60 Meter">60 Meter</option>
            <option value="80 Meter">80 Meter</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Express Lieferung</label>
        <div>
          <Field name="express" component="input" type="checkbox" />
        </div>
      </div>
      <div>
        <button type="submit">berechnen</button>
      </div>
    </Container>
  );
};

export default reduxForm({
  form: "landingPage",
  validate: utils.validate,
  destroyOnUnmount: false
})(LandingPageForm);
