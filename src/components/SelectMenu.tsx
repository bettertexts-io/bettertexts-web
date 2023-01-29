"use client";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type SelectMenuProps = {
  options: string[];
  onSelect: (value: string) => void;
  value: string;
  placeholder: string;
};

export default function SelectMenu({
  options,
  value,
  onSelect,
  placeholder,
}: SelectMenuProps) {
  return (
    <Listbox value={value} onChange={onSelect}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative text-black w-full cursor-default rounded-xl bg-white bg-opacity-60 py-2 lg:py-2 pl-3 pr-10 lg:pl-8 lg:pr-20 text-left shadow-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm">
              <span className="block truncate lg:text-md">{placeholder}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-blue-400" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-blue-400",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
