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
  const toggleUrl = () => setEnabled(!showUrl);

  const initialValues: FormValues = {
    vaultName: "",
    username: "",
    url: "",
    password: "",
  };

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
      : values.password.length < 8
      ? "Password must be at least 8 characters"
      : undefined;

    if (!values.url && showUrl) {
      errors.url = "URL Required";
    }
    if (!showUrl) {
      values.url = "";
      errors.url = undefined;
    }

    return errors;
  };

  const submit = (values: FormValues) => {
    console.log("Values", values);
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
            <div className="flex flex-col items-end justify-center w-full h-full inline-block">
              <span className="text-white inline-flex gap-2">
                Show URL
                <Toggle showUrl={showUrl} setEnabled={toggleUrl} />
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
              fillerButton
              error={errors?.password}
              name="password"
              type="password"
              placeholder={"Password"}
            />
            {errors && (
              <section className="text-red-500 text-xs">
                {Object.values(errors).map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </section>
            )}
            <Button
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                console.log(errors);
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
