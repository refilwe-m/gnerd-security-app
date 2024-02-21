import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { IoIosSearch } from "react-icons/io";
import { HiCheck } from "react-icons/hi";
import { useAppStore } from "../../../stores";
import { Popup } from "..";
import { Vault } from "../../../stores/app-store/types";

export const SearchBar = () => {
  const { vault } = useAppStore();
  const [isOpen, open] = useState(false);
  const [selectedVault, setSelectedVault] = useState<Vault>({
    id: 0,
    vaultName: "",
    website: "",
    username: "",
    password: "",
  });
  const [query, setQuery] = useState("");

  const filteredVaults =
    query === ""
      ? vault
      : vault.filter((entry) => {
          return entry.vaultName.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <section className="top-16 w-full flex justify-center items-center lg:w-72">
        <Combobox value={selectedVault} onChange={setSelectedVault}>
          <div className="relative w-full mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for vaults"
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <IoIosSearch className="h-5 w-5 text-gray-400" />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => {
                console.log("Selected vault", selectedVault);
                selectedVault && open(true);
                setQuery("");
              }}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredVaults.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredVaults.map((entry) => (
                    <Combobox.Option
                      key={entry.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-primary text-white" : "text-gray-900"
                        }`
                      }
                      value={entry}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {entry.vaultName}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </section>
      <Popup isOpen={isOpen} vault={selectedVault} />
    </>
  );
};
