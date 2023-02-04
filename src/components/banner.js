import React from "react";
import Image from "next/image";
import { BannerImage } from "../assets/images/index";
import { connect } from "react-redux";

const title = "The world's greatest fake site";
const bannerText =
  "Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it";
const buttonText = "Do something awesome";

const Banner = ({ isMenuOpen }) => {
  return (
    <div className="relative h-full">
      <Image
        className="w-full h-128 object-cover"
        src={BannerImage}
        alt="banner"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center text-white ${
          isMenuOpen.showMenu ? "bg-gray-900 opacity-75" : ""
        }`}
      >
        <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
          <h1
            className={`lg:m-section text-md lg:text-xl ${
              isMenuOpen.showMenu ? "bg-gray-900 opacity-75" : ""
            }`}
          >
            {title}
          </h1>
          <p
            className={`lg:my-section mt-4 lg:mt-0 flex items-center justify-center mx-auto w-full sm:w-3/5 text-sm lg:text-md ${
              isMenuOpen.showMenu ? "bg-gray-900 opacity-75" : ""
            }`}
          >
            {bannerText}
          </p>
          <button className="button rounded-full p-2 lg:p-4 lg:min-h-[55px] mt-4 lg:mt-0">
            <p className="text-sm lg:text-md">{buttonText}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.showMenu,
  };
};

export default connect(mapStateToProps)(Banner);
