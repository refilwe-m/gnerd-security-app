import { Formik, Form, Field, ErrorMessage } from "formik";
import { FC } from "react";
import { Button, InputField } from "..";

interface FormValues {
  website: string;
  username: string;
  password: string;
}

export const InputForm: FC = () => {
  const initialValues: FormValues = {
    website: "",
    username: "",
    password: "",
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.website) {
      errors.website = "Website Required";
    }

    if (!values.username) {
      errors.username = "Username Required";
    }

    if (!values.password) {
      errors.password = "Password Required";
    }

    return errors;
  };

  const handleSubmit = (values: FormValues) => {
    console.log("website:", values.website);
    console.log("username:", values.username);
    console.log("password:", values.password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col items-center gap-3">
        <Field
          name="website"
          render={({ ...field }) => (
            <>
              <InputField {...field} placeholder={"Website"} />
              <ErrorMessage name="website" component="div" />
            </>
          )}
        />
        <Field
          name="username"
          render={({ ...field }) => (
            <>
              <InputField {...field} placeholder={"Username"} />
              <ErrorMessage name="username" component="div" />
            </>
          )}
        />
        <Field
          name="password"
          render={({...field }) => (
            <>
              <InputField {...field} placeholder={"Password"} />
              <ErrorMessage name="password" component="div" />
            </>
          )}
        />
        <Button btnStyles = "filled" type="submit">Add Credentials</Button>
       
      </Form>
    </Formik>
  );
};