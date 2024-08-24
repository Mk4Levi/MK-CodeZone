import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks, MobileNavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import logo from "../../assets/Logo/Logo.png";
import mkLogo from "../../assets/Logo/MK-Logo.png";
import "../css/Navbar.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ACCOUNT_TYPE } from "../../utils/constants";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [SubLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            className="mt-1 appLogo"
            src={logo}
            width={200}
            loading="lazy"
            alt="logo"
          />
        </Link>

        {/* Nav Links for larger screens */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle />

                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : SubLinks.length ? (
                        SubLinks.filter(
                          (subLink) => subLink.courses.length > 0
                        ).map((subLink, i) => (
                          <Link
                            to={`/catalog/${subLink.name
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                            key={i}
                          >
                            <p>{subLink.name}</p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link.path}>
                    <p
                      className={`${
                        matchRoute(link.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/SignUp/Dashboard & Cart */}
        <div className="flex gap-x-4 items-center login-signup-btns">
          {user && user.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart color="white" size={"2em"} />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null ? (
            <>
              <Link to="/login">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropDown />
          )}
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="flex items-center">
          {isMobile ? (
            <Hamburger
              toggled={toggleMenu}
              toggle={setToggleMenu}
              color="whitesmoke"
              fontSize={27}
              duration={0.5}
              rounded
            />
          ) : (
            <Link to="https://manthan-mk-portfolio.vercel.app" target="blank">
              <img
                className="mt-1 appLogo"
                src={mkLogo}
                width={80}
                loading="lazy"
                alt="mkLogo"
              />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <div className="fixed inset-x-0 top-0 bottom-0 bg-richblack-900 bg-opacity-95 flex flex-col items-center justify-center z-50 p-6">
          <button
            className="text-white text-2xl mb-8"
            onClick={() => setToggleMenu(false)}
          >
            <AiOutlineCloseCircle size={45} />
          </button>
          <nav className="w-full h-full overflow-y-auto flex flex-col items-center">
            <ul className="flex flex-col gap-y-4 text-richblack-25 text-center">
              {MobileNavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <IoIosArrowDropdownCircle />
                      <div className="absolute flex flex-col bg-richblack-5 p-4 text-richblack-900 rounded-lg w-[200px] top-[2em]">
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : SubLinks.length ? (
                          SubLinks.filter(
                            (subLink) => subLink.courses.length > 0
                          ).map((subLink, i) => (
                            <Link
                              to={`/catalog/${subLink.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                              key={i}
                              onClick={() => setToggleMenu(false)}
                            >
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.path} onClick={() => setToggleMenu(false)}>
                      <p
                        className={`${
                          matchRoute(link.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
