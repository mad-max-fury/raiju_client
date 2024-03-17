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
  showCloseBtn: boolean;
  align?: "center" | "right" | "left";
};
const SideDrawer = ({
  isOpen,
  setIsOpen,
  title,
  children,
  isFullWidth,
  size,
  showCloseBtn,
  align = "left",
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
          <div className="fixed inset-0 bg-gray-900/40" />
        </Transition.Child>

        <div
          className={cn(
            "fixed  top-0  bottom-0 w-fit flex",
            align === "center"
              ? "left-auto right-auto mx-auto"
              : align === "right"
              ? "right-0 ml-auto"
              : "left-0 ml-auto"
          )}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom={
              align === "left"
                ? "-translate-x-full"
                : align === "right"
                ? "translate-x-full"
                : "translate-y-full"
            }
            enterTo={
              align === "left"
                ? "-translate-x-0"
                : align === "right"
                ? "translate-x-0"
                : "translate-y-0"
            }
            leave="transition ease-in-out duration-300 transform"
            leaveFrom={
              align === "left"
                ? "-translate-x-0"
                : align === "right"
                ? "translate-x-0"
                : "translate-y-0"
            }
            leaveTo={
              align === "left"
                ? "-translate-x-full"
                : align === "right"
                ? "translate-x-full"
                : "translate-y-full"
            }
          >
            <Dialog.Panel
              className={cn(
                isFullWidth
                  ? "max-w-full"
                  : size === "lg"
                  ? "max-w-[36.875rem]"
                  : " max-w-[18.5rem]",
                " bg-white relative flex w-full flex-1",
                align === "center"
                  ? "mx-auto"
                  : align === "right"
                  ? "ml-auto"
                  : "mr-auto"
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
                <Dialog.Panel className={cn("ml-auto w-full")}>
                  {showCloseBtn && (
                    <Dialog.Title className="flex items-center pt-2  w-full justify-center">
                      {title && title}
                      <button
                        className=" w-10 h-10 rounded-full bg-[#7D7D7D] text-white grid place-items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <BsX className="w-8 h-8" />
                      </button>
                    </Dialog.Title>
                  )}
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
