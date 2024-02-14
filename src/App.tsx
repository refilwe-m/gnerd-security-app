import "tailwindcss/tailwind.css";
import "./App.css";
import { AppTemplate, Heading, Search } from "./components";

function App() {
  return (
    <AppTemplate>
      <Search />
      <Heading />
    </AppTemplate>
  );
}

export default App;
