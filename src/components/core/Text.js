import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormGroup, Input, FormFeedback } from "reactstrap";
import Label from "./Label";

class Text extends React.Component {
  validate(value) {
    const { label, placeholder, required, error } = this.props;

    let errorMessage;
    const inputLabel = label || placeholder;
    const errorMessageLabel = error;

    if ((!value || !value.trim()) && required) {
      errorMessage = errorMessageLabel
        ? `${errorMessageLabel}`
        : `${inputLabel} is required`;
    }

    return errorMessage;
  }

  renderInput({ field, form: { touched, errors } }) {
    const { name, id, label, placeholder, notify, onChange, type } = this.props;

    const errorMessage = touched[name] && errors[name] ? errors[name] : null;
    const inputId = id || name;

    return (
      <FormGroup
        style={{ position: "relative" }}
        className={!!errorMessage && "is-invalid"}
      >
        {label && (
          <Label id={inputId} notify={notify}>
            {label}
          </Label>
        )}
        <Input
          id={inputId}
          {...field}
          type={type ? type : "text"}
          placeholder={placeholder || label}
          invalid={!!errorMessage}
          style={{
            background: "#F3F3F4",
            border: "none",
            borderRadius: "5px",
            fontSize: "14px",
            height: "40px"
          }}
          onKeyUp={onChange}
        />

        {errorMessage && (
          <FormFeedback style={{ position: "absolute", marginTop: 1 }}>
            {errorMessage}
          </FormFeedback>
        )}
      </FormGroup>
    );
  }

  render() {
    const { name } = this.props;

    return (
      <Field
        validate={this.validate.bind(this)}
        name={name}
        render={this.renderInput.bind(this)}
      />
    );
  }
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default Text;
