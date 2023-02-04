import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, Avatar } from "../assets/images/";
import { Hamburger, Close } from "../assets/svg/index";
import { connect, useDispatch } from "react-redux";
import { openShowMenu, closeShowMenu } from "../store/actions";

const NavbarWrapper = (props) => {
  const [bgColor, setBackgroundColor] = useState("bg-transparent");
  const handleScroll = () => {
    if (window.pageYOffset < 150) {
      setBackgroundColor("bg-transparent");
    } else {
      setBackgroundColor("bg-white");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <Navbar bgColor={bgColor} isMenuOpen={props.isMenuOpen} />;
};

const Navbar = ({ bgColor, isMenuOpen }) => {
  const [textColor, setTextColor] = useState("text-blackish");
  const dispatch = useDispatch();
  const openMenu = () => {
    dispatch(openShowMenu());
  };

  const closeMenu = () => {
    dispatch(closeShowMenu());
  };

  useEffect(() => {
    if (bgColor === "bg-white") {
      setTextColor("text-blackish");
    } else {
      setTextColor("text-blueish");
    }
  }, [bgColor]);

  return (
    <nav
      className={`block lg:fixed top-0 left-0 right-0 z-20 p-6 lg:py-8 lg:px-24 ${bgColor}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex items-center hidden lg:flex">
          <div className="p-8">
            <Link
              href="/account"
              className={`${textColor} hover:text-blackish`}
            >
              Account
            </Link>
          </div>
          <div className="p-8">
            <Link href="/help" className={`${textColor} hover:text-blackish`}>
              Help
            </Link>
          </div>
          <div className="pl-8">
            <Image
              className="w-12 h-12 rounded-full border-2 border-white"
              src={Avatar}
              alt="avatar"
            />
          </div>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            className="text-blackish lg:p-8 hover:text-black"
            onClick={openMenu}
          >
            <Image
              src={Hamburger}
              data-testid="hamburger-icon"
              alt="hamburger"
            />
          </button>
        </div>
      </div>
      <div
        className={`fixed right-0 top-0 bottom-0 bg-white p-8 w-[300px] bg-white z-20 ${
          isMenuOpen.showMenu ? "block" : "hidden"
        } lg:hidden`}
      >
        <div className="flex flex-col" data-testid="menu">
          <button onClick={closeMenu} className="flex justify-end">
            <Image src={Close} alt="close" data-testid="close-icon" />
          </button>
          <div className="p-8">
            <Link href="/account" className="text-blueish hover:text-blackish">
              Account
            </Link>
          </div>
          <div className="p-8">
            <Link href="/help" className="text-blueish hover:text-blackish">
              Help
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen.showMenu && (
        <div className="fixed inset-0 bg-black opacity-50"></div>
      )}
    </nav>
  );
};

const mapDispatchToProps = ({ showMenu }) => {
  return {
    openShowMenu: () => dispatch({ type: "OPEN_SHOW_MENU" }),
    closeShowMenu: () => dispatch({ type: "CLOSE_SHOW_MENU" }),
  };
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.showMenu,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarWrapper);
