import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
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

  const handleSubmit = () => {

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
          render={({field}: FieldProps) => (
            <>
              <InputField {...field} placeholder={"Website"} />
              <ErrorMessage
                name="website"
                component="div"
                className="text-error"
              />
            </>
          )}
        />
        <Field
          name="username"
          render={({field}: FieldProps) => (
            <>
              <InputField {...field} placeholder={"Username"} />
              <ErrorMessage
                name="username"
                component="div"
                className="text-error"
              />
            </>
          )}
        />
        <Field
          name="password"
          render={({field}: FieldProps) => (
            <>
              <InputField {...field} placeholder={"Password"} />
              <ErrorMessage
                name="password"
                component="div"
                className="text-error"
              />
            </>
          )}
        />
        <Button styles="filled" onClick={handleSubmit} >
          Add Credentials
        </Button>
      </Form>
    </Formik>
  );
};
