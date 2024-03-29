import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";
import "./App.css";
import { AppTemplate, FormTemplate, Heading, InputForm } from "./components";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <AppTemplate>
        <Heading />
        <FormTemplate>
          <InputForm />
        </FormTemplate>
      </AppTemplate>
    </>
  );
}

export default App;
