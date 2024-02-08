import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "../custom.css";
import { NavLink } from "react-router-dom";

const navigation = [{ name: "WELCOME TO EXPLORE", href: "dictionary" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  return (
    <>
      <Disclosure
        as="nav"
        className=" flex justify-center items-center background px-3 py-3"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>

                <div className="sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        to={item.href}
                        className={({ isActive }) => {
                          return (
                            "sm:text-xl px-3 py-2 text-4xl font-medium no-underline " +
                            "text-white no-underline "
                          );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <div className="bg-gray-300 background">
        <div className="max-w-7xl mx-auto min-h-screen px-3 py-2">
          {props.children}
        </div>
      </div>
    </>
  );
}
