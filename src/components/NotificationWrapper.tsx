/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export enum NOTIFICATION_TYPE {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

type NotificationWrapperProps = {
  type: NOTIFICATION_TYPE;
  message: string;
  description?: string;
  isVisible: boolean;
  onClose: () => void;
  timeout?: number;
};

export default function NotificationWrapper({
  type,
  message,
  description,
  isVisible,
  onClose,
  timeout = 10000,
}: NotificationWrapperProps) {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, timeout);
  });

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={isVisible}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg pointer-events-auto">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {type === NOTIFICATION_TYPE.SUCCESS ? (
                      <CheckCircleIcon
                        className="w-6 h-6 text-green-400"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                  <div className="flex-1 w-0 pt-0.5 ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {message}
                    </p>
                    {description ? (
                      <p className="mt-1 text-sm text-gray-500">
                        {description}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex-shrink-0 flex ml-4">
                    <button
                      type="button"
                      className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      {/* Heroicon name: solid/x */}
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
