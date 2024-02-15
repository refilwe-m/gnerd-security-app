import "tailwindcss/tailwind.css";
import "./App.css";
import { AppTemplate, Heading } from "./components";
import { InputForm } from "./components/common/form/form";

function App() {
  return (
    <AppTemplate>
      <Heading />
      <InputForm />
    </AppTemplate>
  );
}

export default App;
