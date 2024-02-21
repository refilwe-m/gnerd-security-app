import { Dispatch, FC, SetStateAction } from "react";
import { Switch } from "@headlessui/react";

interface ToggleProps {
  showUrl: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

export const Toggle: FC<ToggleProps> = ({ showUrl, setEnabled }) => {
  return (
    <div className="flex items-center justify-end">
      <Switch
        checked={showUrl}
        onChange={setEnabled}
        className={`${
          showUrl ? "bg-green" : "bg-purple"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            showUrl ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};
