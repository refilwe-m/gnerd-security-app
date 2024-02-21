import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useEffect, useState } from "react";
import { TextBox } from "..";
import { Vault } from "../../../stores/app-store/types";

type PopupProps = {
  isOpen?: boolean;
  vault: Vault;
};

export const Popup: FC<PopupProps> = ({ isOpen = false, vault }) => {
  const [opened, setIsOpened] = useState(false);
  const closeModal = () => {
    setIsOpened(false);
  };
  const labels = {
    vaultName: "Vault Name",
    username: "Username",
    website: "URL",
    password: "Password",
  };

  useEffect(() => {
    vault?.id !== 0 && setIsOpened(isOpen);
  }, [isOpen, vault]);

  return (
    <>
      <Transition appear show={opened} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold flex justify-center pb-3 leading-6 text-gray-900"
                  >
                    Your Vault Details
                  </Dialog.Title>
                  <div className="py-2 flex flex-col gap-2">
                    {Object.keys(labels)?.map((key) => (
                      <TextBox
                        key={key}
                        label={labels?.[key as keyof typeof labels]}
                        text={vault?.[key as keyof typeof vault] as string}
                      />
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
