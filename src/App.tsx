import "tailwindcss/tailwind.css";
import "./App.css";
import { AppTemplate, Heading } from "./components";
import { InputForm } from "./components/common/form/add-website-form";

function App() {
  return (
    <AppTemplate>
      <Search />
      <Heading />
      <InputForm />
    </AppTemplate>
  );
}

export default App;
