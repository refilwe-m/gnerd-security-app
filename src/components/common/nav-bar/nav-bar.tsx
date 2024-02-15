import { SearchBar } from "..";
import { useAppStore } from "../../../stores";

export const NavBar = () => {
  const { user } = useAppStore();
  return (
    <nav className="flex justify-between items-center px-3">
      <h4 className="text-lg py-2 text-white font-light hover:text-green">
        {`Hi, ${user.name}`}
      </h4>
      <SearchBar />
    </nav>
  );
};
