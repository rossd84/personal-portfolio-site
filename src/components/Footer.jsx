import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll'
import { navLinks, socialLinks } from './Navbar'

const Footer = () => {

	return (
		<footer className='w-full bg-primary-900 text-secondary-300 flex justify-center flex-col'>
			{/* navbar */}
			<nav className='py-4 flex justify-center' aria-label='Social Media Links'>
				<ul id='footer-menu' className='flex' role='menu'>
					{
						navLinks.map(item => (
							<li key={item.name} className="hover:text-secondary-100" role='presentation'>
								<Link to={item.link} smooth={true} duration={500} role='menuitem'>
									{item.name}
								</Link>
							</li>
						))
					}
				</ul>
			{/* socials */}
				<div className='py-4 flex justify-center'>
						<ul id='footer-social-menu' className='flex justify-between'>
							{socialLinks.map(item => (
								<li key={item.name}>
									<a
										className='w-12 h-12 flex justify-center items-center md:hover:text-secondary-100'
										href={item.link}
										target='_blank'
										rel='noreferrer'
										aria-label={`Link to profile on ${item.name}`}
										>
										{item.icon}
									</a>
								</li>
							))}
						</ul>
				</div>
			</nav>

			{/* logo */}
			<div className='flex justify-center items-center pt-2' tabIndex="-1">
				<img 
					className='svg-color-accent' 
					src={Logo} 
					alt='Logo for Darby Ross' 
					style={{ width: '80px' }} 
				/>
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
