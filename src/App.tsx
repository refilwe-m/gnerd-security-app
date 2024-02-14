import "tailwindcss/tailwind.css";
import "./App.css";
import { AppTemplate, Button, Heading, InputField } from "./components";

function App() {
  function hep() {
    console.log("Heyy");
  }
  return (
    <AppTemplate>
      <Heading />
      <section className="flex flex-col items-center">
        <InputField placeholderText={"Full Name"} />
        <InputField placeholderText={"Website"} />
        <InputField placeholderText={"Password"} />
        <Button btnStyles="styled" styles="" onClick={hep}>
          Click Me
        </Button>
      </section>
    </AppTemplate>
  );
}

export default App;
