import { Formik, Field, Form, ErrorMessage } from "formik";
import { FC } from "react";

interface MyFormProps {
  placeholderText: string;
}

interface MyFormValues {
  myField: string;
}

export const InputField: FC<MyFormProps> = ({ placeholderText }) => {
  const initialValues: MyFormValues = {
    myField: "",
  };

  const handleSubmit = (values: MyFormValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="py-3 lg:w-1/4 ">
        <Field
          className="py-3 font-bold w-full px-6 rounded-lg"
          type="text"
          id="myField"
          name="myField"
          placeholder={placeholderText}
        />
        <ErrorMessage name="myField" component="div" />
      </Form>
    </Formik>
  );
};
