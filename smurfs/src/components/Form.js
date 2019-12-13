import { withFormik, Form, Field } from "formik";
import React from "react";


function postSmurfForm() {
  return (
    <Form>
      <div />
      <div>
        <label>Name: </label>
        <Field name="name" type="text" placeHolder="Name" />
      </div>
      <div>
        <label>Age: </label>
        <Field name="age" type="text" placeHolder="Age" />
      </div>
      <div>
        <label>Height: </label>
        <Field name="height" type="text" placeHolder="Height" />
      </div>
      <button type="submit">Send new smurf to the village</button>
    </Form>
  );
}

const FormikForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  handleSubmit(values, { resetForm, props }) {
    console.log("props on handleSubmit");
    console.log(props);
    props.postSmurf(values);
    resetForm();
  }
})(postSmurfForm);

export default FormikForm;
