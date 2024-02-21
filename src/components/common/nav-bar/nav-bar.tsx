import { SearchBar } from "..";
import { useAppStore } from "../../../stores";

export const NavBar = () => {
  const { user } = useAppStore();
  return (
    <nav className="flex w-full lg:justify-between items-center py-2 px-3">
      <h4 className="invisible font-thin text-xs md:visible md:text-base lg:text-lg text-green hover:text-primary">
        {`Hi, ${user.name}`}
      </h4>
      <SearchBar />
    </nav>
  );
};
