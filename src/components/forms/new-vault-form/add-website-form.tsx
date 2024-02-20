import { Form, Formik } from "formik";
import { FC } from "react";
import { Button, InputField } from "../../common";
import { useAppStore } from "../../../stores";

interface FormValues {
  vaultName: string;
  username: string;
  password: string;
}

export const InputForm: FC = () => {
  const { addVault } = useAppStore();
  const initialValues: FormValues = {
    vaultName: "Web",
    username: "user",
    password: "Pas$w0rd",
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.vaultName) {
      errors.vaultName = "Website Required";
    }

    if (!values.username) {
      errors.username = "Username Required";
    }

    if (!values.password) {
      errors.password = "Password Required";
    }

    return errors;
  };

  const submit = (values) => {
    addVault(values);
    Toast()
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={submit}>
      {({ values, errors }) => (
        <Form className="flex flex-col w-full lg:w-[30%] items-center gap-3">
          <InputField name="vaultName" placeholder={"Website Name"} />
          <InputField name="username" placeholder={"Username"} />
          <InputField name="password" placeholder={"Password"} />
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              submit(values);
            }}
          >
            Add Credentials
          </Button>
        </Form>
      )}
    </Formik>
  );
};
