import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll'
import { navLinks, socialLinks } from './Navbar'

const Footer = () => {

	return (
		<footer className='w-full bg-primary-500 text-secondary-300 flex justify-center flex-col'>
			{/* navbar */}
			<nav className='py-4 flex justify-center'>
				<ul id='footer-menu' className='flex' role='menu'>
					{
						navLinks.map(item => (
							<li className="hover:text-secondary-200" role='presentation'>
								<Link to={item.link} smooth={true} duration={500} role='menuitem'>
									{item.name}
								</Link>
							</li>
						))
					}
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
					{socialLinks.map(item => (
						<li key={item.name} className='flex items-center' role='presentation'>
							<a
								className='w-[50px] h-[50px] flex justify-center items-center'
								href={item.link}
								target='_blank'
								rel='noreferrer'
								role='menuitem'
								aria-label='link to profile on LinkedIn'>
								{item.icon}
							</a>
						</li>
					))}
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
