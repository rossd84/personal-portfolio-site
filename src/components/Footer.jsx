import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll'

const Footer = () => {
	const socials = {
		linkedin: 'https://www.linkedin.com/in/darby-ross/',
		github: 'https://github.com/rossd84'
	}

	return (
		<footer className='w-full bg-primary text-secondary flex justify-center flex-col'>
			{/* navbar */}
			<nav className='py-4 flex justify-center'>
				<ul id='footer-menu' className='flex' role='menu'>
					<li role='presentation'>
						<Link to='home' smooth={true} duration={500} role='menuitem'>
							Home
						</Link>
					</li>
					<li role='presentation'>
						<Link to='about' smooth={true} duration={500} role='menuitem'>
							About
						</Link>
					</li>
					<li role='presentation'>
						<Link to='skills' smooth={true} duration={500} role='menuitem'>
							Skills
						</Link>
					</li>
					<li role='presentation'>
						<Link to='work' smooth={true} duration={500} role='menuitem'>
							Work
						</Link>
					</li>
					<li role='presentation'>
						<Link to='contact' smooth={true} duration={500} role='menuitem'>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			{/* socials */}
			<div
				className='py-4 flex justify-center'>
				<ul id='footer-social-menu'
					className='relative flex justify-between 
					before:absolute before:top-1/2 before:left-[-80px] before:content-[""] before:bg-secondary before:h-1 before:w-[50px]
        			after:absolute after:top-1/2 after:right-[-80px] after:content-[""] after:bg-secondary after:h-1 after:w-[50px] '
					role='menu'>
					<li className='flex items-center' role='presentation'>
						<a
							className='w-[50px] h-[50px] flex justify-center items-center'
							href={socials.linkedin}
							target='_blank'
							rel='noreferrer'
							role='menuitem'
							aria-label='link to profile on LinkedIn'>
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className='flex items-center' role='presentation'>
						<a
							className='w-[50px] h-[50px] flex justify-center items-center'
							href={socials.github}
							target='_blank'
							rel='noreferrer'
							role='menuitem'
							aria-label='link to profile on GitHub'>
							<FaGithub size={30} />
						</a>
					</li>
				</ul>
			</div>
			{/* logo */}
			<div className='flex justify-center items-center pt-2' tabIndex="-1">
				<img className='svg-color-accent' src={Logo} alt='Logo for Darby Ross' style={{ width: '80px' }} />
			</div>
			{/* copywrite */}
			<div className='w-full py-2 flex flex-col justify-center items-center'>
				<span>Copyright © 2023 Darby Ross</span>
				<span>All Rights Reserved</span>
			</div>
		</footer>
	)
}

export default Footer
