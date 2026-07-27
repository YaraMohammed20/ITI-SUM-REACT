import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navimg from "../../imgs/kkkk.png";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Recipe", href: "#", current: false },
  { name: "Gallery", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="absolute top-0 left-0 w-full z-50 bg-transparent  border-b border-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="group rounded-md p-2 text-white hover:bg-amber-500 transition">
              <Bars3Icon
                className="block h-6 w-6 group-data-open:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 group-data-open:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img src={Navimg} alt="Logo" className="w-30" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-amber-500"
                    : "text-white hover:text-amber-500",
                  "text-sm font-medium transition"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Buttons (Hidden on Mobile) */}
          <div className="hidden sm:flex items-center gap-3">
             <button
              className="border border-amber-500 bg-amber-500 px-6 py-2 text-white transition hover:bg-transparent hover:text-amber-400"
            >
              Have Any Questions?
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden bg-cyan-950">
        <div className="space-y-2 px-4 py-4">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "text-amber-500"
                  : "text-white hover:text-amber-500",
                "block rounded-md px-3 py-2 text-base font-medium transition"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}