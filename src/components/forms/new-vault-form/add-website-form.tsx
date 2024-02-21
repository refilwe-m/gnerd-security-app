import { Form, Formik } from "formik";
import { FC, useState } from "react";
import { Button, InputField, Toggle } from "../../common";
import { useAppStore } from "../../../stores";
import toast from "react-hot-toast";

interface FormValues {
  vaultName: string;
  username: string;
  url?: string;
  password: string;
}

export const InputForm: FC = () => {
  const { addVault } = useAppStore();
  const [showUrl, setEnabled] = useState(true);

  const initialValues: FormValues = {
    vaultName: "",
    username: "",
    url: "",
    password: "",
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

    if (!values.url) {
      errors.url = "URL Required";
    }

    return errors;
  };

  const submit = (values) => {
    addVault(values);
    toast.success("Vault Added Successfully!");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submit}
      >
        {({ values, errors }) => (
          <Form className="flex flex-col w-full lg:w-[30%] items-center gap-3">
            <div className="flex flex-col items-end justify-center w-full h-full  inline-block">
              <span className="text-white inline-flex gap-2">Show URL
                <Toggle
                  showUrl={showUrl}
                  setEnabled={setEnabled}
                  label="Show URL: "
                />
              </span>
            </div>
            <InputField
              error={errors.vaultName}
              name="vaultName"
              placeholder={"Website Name"}
            />
            {showUrl && (
              <InputField
                error={errors.url}
                name="url"
                placeholder={"Website URL e.g https://example.com"}
              />
            )}
            <InputField
              error={errors?.username ?? ""}
              name="username"
              placeholder={"Username"}
            />
            <InputField
              error={errors?.password}
              name="password"
              placeholder={"Password"}
            />
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
    </>
  );
};
