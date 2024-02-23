import { Form, Formik } from "formik";
import { FC, useState } from "react";
import { Button, InputField, Toggle } from "../../common";
import { useAppStore } from "../../../stores";
import toast from "react-hot-toast";
import { isUndefined } from "lodash";
interface FormValues {
  vaultName: string;
  username: string;
  url?: string;
  password: string;
}

export const InputForm: FC = () => {
  const { addVault } = useAppStore();
  const [showUrl, setEnabled] = useState(true);
  const [initialValues, setInitialValues] = useState({
    vaultName: "",
    username: "",
    url: "",
    password: "",
  });

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    errors.vaultName = !values.vaultName
      ? "Website Required"
      : values.vaultName.length < 3 || values.vaultName.length > 16
      ? "Website Name must be between 3 and 16 characters"
      : undefined;

    if (!values.username) {
      errors.username = "Username Required";
    }

    errors.password = !values.password
      ? "Password Required"
      : values.password.length < 6
      ? "Password must be at least 6 characters"
      : undefined;

    if (!values.url && showUrl) {
      errors.url = "URL Required";
    }
    if (!showUrl) {
      values.url = "";
    }

    if (isUndefined(errors.vaultName) || isUndefined(errors.password)) {
      return;
    }
    return errors;
  };

  const submit = (values: FormValues) => {
    addVault(values);
    toast.success("Vault Added Successfully!");
    values.password = "";
    values.url = "";
    values.username = "";
    values.vaultName = "";
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validate={validate}
        onSubmit={submit}
      >
        {({ values, errors, setFieldValue, setFieldError }) => (
          <Form className="flex flex-col w-full lg:w-[30%] items-center gap-3">
            <div className="flex flex-col items-end justify-center w-full h-full">
              <span className="text-white inline-flex gap-2">
                Add URL
                <Toggle showUrl={showUrl} setEnabled={setEnabled} />
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
                onChange={() => {
                  if (!showUrl) setFieldValue("url", " ");
                  setFieldError("url", " ");
                }}
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
              fillerButton
              error={errors?.password}
              name="password"
              type="password"
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
