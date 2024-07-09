import React from "react";
import Link from "next/link";
import Image from "next/image";
import mizuLogo from "../public/images/mizu-logo.png";
import facebookIcon from "../public/images/facebook-icon.svg";
import instagramIcon from "../public/images/instagram-icon.svg";
import yelpIcon from "../public/images/yelp-icon.svg";

const Footer = () => {
  return (
    <footer className="h-[15rem] w-screen bg-black flex justify-center">
      <div className="max-w-5xl flex justify-around items-center border border-gold w-full py-4">
        <div className="">
          <Link href={"/"}>
            <Image
              alt="Mizu Izakaya Icon"
              src={mizuLogo}
              className="w-32 sm:w-28 lg:w-48 cursor-pointer"
            />
          </Link>
          <div className="flex flex-col items-center text-white font-clean">
            <p className="text-md my-2">1560 Boulder St. Denver, CO 80211</p>
            <p className="text-md">(720) 372-7100</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center text-white font-clean text-wrap">
            <h2 className="text-md my-2">Hours:</h2>
            <p className="text-sm">Monday: 4:30-11PM</p>
            <p className="text-sm">Tuesday: 4:30-11PM</p>
            <p className="text-sm">Wednesday: 4:30-11PM</p>
            <p className="text-sm">Thursday: 4:30-11PM</p>
            <p className="text-sm">Friday: 11:30AM-11PM</p>
            <p className="text-sm">Saturday: 11:30AM-11PM</p>
            <p className="text-sm">Sunday: 11:30AM-10PM</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-clean text-white my-2">Follow Us</h2>
          <div className="flex justify-between">
            <Link href={"https://www.facebook.com/MizuDenver/"}>
              <Image
                alt="Facebook Icon"
                src={facebookIcon}
                className="w-16 sm:w-12 lg:w-18 cursor-pointer"
              />
            </Link>
            <Link href={"https://www.yelp.com/biz/mizu-izakaya-denver-6"}>
              <Image
                alt="Yelp Icon"
                src={yelpIcon}
                className="w-16 sm:w-12 lg:w-18 cursor-pointer"
              />
            </Link>
            <Link href={"https://www.instagram.com/mizudenver/"}>
              <Image
                alt="Instagram Icon"
                src={instagramIcon}
                className="w-16 sm:w-12 lg:w-18 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
