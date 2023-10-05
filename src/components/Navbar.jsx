import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll'

export const navLinks = [
  {
    name: 'Home',
    link: 'home',
  },
  {
    name: 'About',
    link: 'about',
  },
  {
    name: 'Skills',
    link: 'skills',
  },
  {
    name: 'Work',
    link: 'work',
  },
  {
    name: 'Contact',
    link: 'contact',
  },
]

export const socialLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/darby-ross/',
    ariaLabel: 'link to profile on LinkedIn',
    icon: <FaLinkedin size={30} />,
    bgColor: 'bg-[#002ba1]', // official LinkedIn color
  },
  {
    name: 'GitHub',
    link: 'https://github.com/rossd84',
    ariaLabel: 'link to profile on GitHub',
    icon: <FaGithub size={30} />,
    bgColor: 'bg-primary-900',
  },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <nav
      id="main-nav"
      className="fixed w-full h-[70px] px-12 bg-primary-600 text-custom_gray-500"
      aria-label="main nav"
    >
      <div className="h-full flex justify-between items-center mx-auto max-w-[1000px]">
        <div className="z-10" tabIndex="-1">
          <Link href="#home" to="home" spy={true} smooth={true} duration={250}>
            <img
              className="svg-color-accent cursor-pointer"
              src={Logo}
              alt="Darby Ross Portfolio Logo"
              style={{ width: '50px' }}
            />
          </Link>
        </div>

        {/* menu  */}
        <ul id="main-menu" className="hidden md:flex" role="menubar">
          {navLinks.map((item) => (
            <li key={item.name} role="presentation">
              <Link
                className="hover:text-accent-200 navlink"
                activeClass="!text-accent-500"
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* burger */}
        <button
          onClick={handleClick}
          className="md:hidden z-10 p-4 pr-0"
          aria-label="toggle mobile main menu"
          aria-expanded={nav}
          aria-controls="mobile-menu"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>

        {/* mobile menu  */}
        <div
          className={
            !nav
              ? 'hidden'
              : 'md:hidden absolute top-0 left-0 w-full h-screen bg-primary-500 flex flex-col justify-center items-center'
          }
        >
          <ul id="mobile-menu" className="w-full flex flex-col items-center" role="menu">
            {navLinks.map((item) => (
              <li key={item.name} className="py-6 text-4xl" role="presentation">
                <Link
                  onClick={handleClick}
                  activeClass="font-bold"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* dropdown socials */}
            <li role="presentation">
              <div>
                <ul id="social-menu-mobile" className="flex justify-between" role="menu">
                  <li className="flex items-center" role="presentation">
                    <Link
                      onClick={handleClick}
                      activeClass="font-bold"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="w-[60px] h-[60px] flex justify-center items-center text-grey-300"
                      href="/"
                      role="menuitem"
                      aria-label="contact me"
                    >
                      <HiOutlineMail size={30} />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* social icons  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul id="socials-menu" role="menu" aria-label="socials menu">
          {socialLinks.map((item) => (
            <li
              key={item.name}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] hover:shadow-lg duration-300 ${item.bgColor}`}
              role="presentation"
            >
              <a
                className="flex justify-between items-center w-full text-primary_font"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                role="menuitem"
              >
                {item.name} {item.icon}
              </a>
            </li>
          ))}
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-sm hover:shadow-lg duration-300 bg-accent-700"
            role="presentation"
          >
            <Link
              onClick={handleClick}
              activeClass="font-bold"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-custom_gray-100"
              href="/"
              role="menuitem"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
