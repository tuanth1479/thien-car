"use client";

import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

// react scroll
import { Link } from "react-scroll";

// components
import SearchMobile from "./SearchMobile";

// media query
import { useMediaQuery } from "react-responsive";

// icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

// search context
import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // Header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search
      if(window.scrollY > 800){
        setSearchActive(true);
      }else{
        setSearchActive(false);
      }
    };

    // add event listener
    window.addEventListener('scroll', handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={`${header ? "bg-white py-2 shadow-md" : "bg-transparent shadow-none py-4"
        } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo-thien.svg"} width={274} height={104} alt="" />
          </Link>
          {/* nav open menu */}
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
            } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row
           xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            to="home"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Trang chủ
          </Link>
          <Link
            to="cars"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Xe hơi
          </Link>
          <Link
            to="about"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Về chúng tôi
          </Link>
          {/* <Link
            to="why"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            to="testimonial"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          > 
            Testimonials
          </Link> */}
          <Link
            to="contact"
            className="cursor-pointer"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          > 
            Liên hệ
          </Link>
          <Link
            to="/"
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
