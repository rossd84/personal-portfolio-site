import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)

	const socials = {
		linkedin: 'https://www.linkedin.com/in/darby-ross/',
		github: 'https://github.com/rossd84'
	}

	return (
		<nav id='main-nav' className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-primary text-primary_font' aria-label='main nav'>
			<div className='font-bold p-1 z-10' tabIndex="-1">
				<img className='svg-color-accent' src={Logo} alt='website logo' style={{ width: '50px' }} />
			</div>

			

			{/* menu  */}
			<ul id="main-menu" className='hidden md:flex' role="menubar">
				<li role="presentation">
					<Link activeClass='font-bold text-accent' to='home' spy={true} smooth={true} duration={500} role="menuitem">
						Home
					</Link>
				</li>
				<li role="presentation">
					<Link activeClass='font-bold text-accent' to='about' spy={true} smooth={true} duration={500} role="menuitem">
						About
					</Link>
				</li>
				<li role="presentation">
					<Link activeClass='font-bold text-accent' to='skills' spy={true} smooth={true} duration={500} role="menuitem">
						Skills
					</Link>
				</li>
				<li role="presentation">
					<Link activeClass='font-bold text-accent' to='work' spy={true} smooth={true} duration={500} role="menuitem">
						Work
					</Link>
				</li>
				<li role="presentation">
					<Link activeClass='font-bold text-accent' to='contact' spy={true} smooth={true} duration={500} role="menuitem">
						Contact
					</Link>
				</li>
			</ul>

			{/* burger */}
			<button onClick={handleClick} className='md:hidden z-10' aria-label='toggle mobile main menu' aria-expanded={nav} aria-controls='mobile-menu'>
				{!nav ? <FaBars /> : <FaTimes />}
			</button>

			{/* mobile menu  */}
			<div
				className={
					!nav
						? 'hidden'
						: 'md:hidden absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'
				}>
				<ul id="mobile-menu" className='w-full flex flex-col items-center' role="menu" >
					<li className='py-6 text-4xl' role="presentation">
						<Link onClick={handleClick} activeClass='font-bold' to='home' spy={true} smooth={true} duration={500} role="menuitem">
							Home
						</Link>
					</li>
					<li className='py-6 text-4xl' role="presentation">
						<Link onClick={handleClick} activeClass='font-bold' to='about' spy={true} smooth={true} duration={500} role="menuitem">
							About
						</Link>
					</li>
					<li className='py-6 text-4xl' role="presentation">
						<Link onClick={handleClick} activeClass='font-bold' to='skills' spy={true} smooth={true} duration={500} role="menuitem">
							Skills
						</Link>
					</li>
					<li className='py-6 text-4xl' role="presentation">
						<Link onClick={handleClick} activeClass='font-bold' to='work' spy={true} smooth={true} duration={500} role="menuitem">
							Work
						</Link>
					</li>
					<li className='py-6 text-4xl' role="presentation">
						<Link onClick={handleClick} activeClass='font-bold' to='contact' spy={true} smooth={true} duration={500} role="menuitem">
							Contact
						</Link>
					</li>

					{/* dropdown socials */}
					<li role="presentation">
						<div>
							<ul id="social-menu-mobile" className='flex justify-between' role="menu">
								<li className='flex items-center' role="presentation">
									<a
										className='w-[60px] h-[60px] flex justify-center items-center text-grey-300'
										href={socials.linkedin}
										target='_blank'
										rel='noreferrer'
										role="menuitem"
										aria-label='link to profile on LinkedIn'>
										<FaLinkedin size={30} />
									</a>
								</li>
								<li className='flex items-center' role="presentation">
									<a
										className='w-[60px] h-[60px] flex justify-center items-center text-grey-300'
										href={socials.github}
										target='_blank'
										rel='noreferrer'
										role="menuitem"
										aria-label="link to profile on GitHub">
										<FaGithub size={30} />
									</a>
								</li>
								<li className='flex items-center' role="presentation">
									<Link
										onClick={handleClick}
										activeClass='font-bold'
										to='contact'
										spy={true}
										smooth={true}
										duration={500}
										className='w-[60px] h-[60px] flex justify-center items-center text-grey-300'
										href='/'
										role="menuitem"
										aria-label="contact me">
										<HiOutlineMail size={30} />
									</Link>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>

			{/* social icons  */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul id='socials-menu' role='menu' aria-label='socials menu'>
					<li 
						className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] hover:shadow-lg duration-300 bg-[#002ba1]'
						role='presentation'>
						<a
							className='flex justify-between items-center w-full text-primary_font'
							href={socials.linkedin}
							target='_blank'
							rel='noreferrer'
							role="menuitem">
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li 
						className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] hover:shadow-lg duration-300 bg-[#333]'
						role='presentation'>
						<a
							className='flex justify-between items-center w-full text-primary_font'
							href={socials.github}
							target='_blank'
							rel='noreferrer'
							role='menuitem'>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-sm hover:shadow-lg duration-300 bg-secondary'
						role='presentation'>
						<Link
							onClick={handleClick}
							activeClass='font-bold'
							to='contact'
							spy={true}
							smooth={true}
							duration={500}
							className='flex justify-between items-center w-full text-primary_font'
							href='/'
							role='menuitem'>
							Email <HiOutlineMail size={30} />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
