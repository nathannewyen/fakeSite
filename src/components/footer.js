import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../assets/images/index";

const fakesite = [
  { name: "About us", link: "/about" },
  { name: "Press", link: "/press" },
  { name: "Policies", link: "/policies" },
  { name: "Help", link: "/help" },
];

const account = [
  { name: "Edit Profile", link: "/edit-profile" },
  { name: "Friends", link: "/friends" },
  { name: "Social", link: "/social" },
  { name: "Delete Profile", link: "/delete-profile" },
];

const Fakesite = () => (
  <ul className="mr-12 pb-6">
    <p className="text-redish mt-8">Fakesite</p>
    {fakesite.map((item) => (
      <li key={item.name} className="text-blueish">
        <a href={item.link}>{item.name}</a>
      </li>
    ))}
  </ul>
);

const Account = () => (
  <ul className="pb-6">
    <p className="text-redish mt-8">Account</p>
    {account.map((item) => (
      <li key={item.name} className="text-blueish">
        <Link href={item.link}>{item.name}</Link>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="px-6 py-6 lg:px-24">
      <div className="flex justify-around lg:justify-start">
        <Fakesite />
        <Account />
      </div>
      <hr className="h-px my-8 bg-blueish hover:text-blackish border-0" />
      <div className="flex">
        <Image src={Logo} alt="logo footer" />
        <div className="flex text-blueish flex-grow justify-end">
          <Link href="#" className="px-4 hover:text-blackish">
            Terms
          </Link>
          <Link href="#" className="px-4 hover:text-blackish">
            Privacy
          </Link>
          <Link href="#" className="hover:text-blackish">
            Site Map
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
