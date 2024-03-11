import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { BsX } from "react-icons/bs";
import cn from "../utils/common";

type ISideDrawer = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  title?: ReactNode;
  isFullWidth?: boolean;
  size?: "sm" | "lg";
};
const SideDrawer = ({
  isOpen,
  setIsOpen,
  title,
  children,
  isFullWidth,
  size,
}: ISideDrawer) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed right-0 top-0 bottom-0 w-full flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className={cn(
                isFullWidth
                  ? "max-w-full"
                  : size === "lg"
                  ? "max-w-[36.875rem]"
                  : " max-w-[18.5rem]",
                "ml-auto bg-white relative flex w-full flex-1"
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel
                  className={cn(
                    isFullWidth || size === "lg" ? "px-10" : "px-6",
                    "ml-auto w-full"
                  )}
                >
                  <Dialog.Title className="flex items-center pt-5 w-full justify-between">
                    {title}
                    <button
                      className="ml-auto w-10 h-10 rounded-full bg-[#7D7D7D] text-white grid place-items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <BsX className="w-8 h-8" />
                    </button>
                  </Dialog.Title>
                  <Dialog.Panel>{children}</Dialog.Panel>
                </Dialog.Panel>
              </Transition.Child>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SideDrawer;
