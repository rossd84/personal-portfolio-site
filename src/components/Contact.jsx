import React, { useState, useRef } from 'react'
import { socialLinks } from './Navbar';
import emailjs from '@emailjs/browser'
import Section from './layouts/Section';
import { VscMail, VscLocation } from 'react-icons/vsc'

const Contact = () => {
	const [emailSent, setEmailSent] = useState(false);
	const [formData, setFormData] = useState({
		user_name: '',
		user_email: '',
		message: ''
	})
	const form = useRef();

	const sendEmail = async (e) => {
		e.preventDefault();		
		
		if (emailSent === false) {

			await emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
				.then((result) => {
						console.log(formData);
						setFormData({
							user_name: '',
							user_email: '',
							message: ''
						})
				}, (error) => {
						console.log(error.text);
				});
			
				setEmailSent(true);
		}

	}

	const handleInputChange = (e) => {

		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		})
	}


	return (
		<Section
			header='Contact Me'
			subheader='Submit the form below or shoot me an email'
			name='contact'
			bgColor='bg-secondary-700'
		>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<div className='md:border-r-4 md:border-secondary-400 pr-12 py-12'>
					<form className='flex flex-col max-w-[600px] w-full gap-2' method='POST' ref={form} onSubmit={sendEmail}>
						<label className="flex flex-col text-secondary-100" aria-label="name">
							Name
							<input 
								className='bg-custom_gray-500 rounded-sm p-2 text-primary-900' 
								type='text' 
								placeholder='Name' 
								name='user_name'
								value={formData.user_name}
								onChange={handleInputChange}
								required />
						</label>
						<label className="flex flex-col text-secondary-100" aria-label="email">
							Email
							<input 
								className='p-2 bg-custom_gray-500 rounded-sm text-primary-900' 
								type='email' 
								placeholder='Email' 
								name='user_email'
								value={formData.user_email}
								onChange={handleInputChange}
								required
							/>
						</label>
						<label className="flex flex-col text-secondary-100" aria-label="message">
							Message
							<textarea 
							className='bg-custom_gray-500 rounded-sm p-2 text-primary-900' 
							name='message' 
							rows='10' 
							placeholder='Message'
							value={formData.message}
							onChange={handleInputChange}
							required
							/>
						</label>
						<div >
							<button className='rounded-sm text-custom_gray-500 border-2 hover:bg-accent-500 hover:border-accent-500 hover:text-primary-500 duration-200 px-4 py-3 my-2 mx-auto w-full' type='submit'>
								Send Message
							</button>
						</div>
					</form>
				</div>
				<div className='pl-12 py-12'>
					<div className='border-b-2 border-secondary-400 flex flex-col gap-12 pb-12'>
						<h3 className='text-center'>Contact Information</h3>
						<p className='flex items-center justify-center relative'>
							<span className='pr-8 absolute left-0'><VscLocation size={30} /></span>
							Hattiesburg, MS
						</p>
						<a className='hover:text-accent-500 flex items-center justify-center relative' href="mailto:darbyross.dev@gmail.com">
							<span className='pr-8 absolute left-0'><VscMail size={30} /></span>
							darbyross.dev@gmail.com
						</a>
					</div>
					<div className='pt-12 flex flex-col justify-center items-center gap-12'>
						<h3>Connect with Me</h3>
						<div>
							<ul className='flex gap-8' role='menu'>
								{socialLinks.map(item => (
									<li key={item.name} className='flex items-center' role='presentation'>
										<a
											className='w-[50px] h-[50px] flex justify-center items-center hover:text-accent-500'
											href={item.link}
											target='_blank'
											rel='noreferrer'
											role='menuitem'
											aria-label={`Link to profile on ${item.name}`}
										>
											<span className='sr-only'>{item.name}</span> {/* Screen reader-only label */}
											{item.icon}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Contact
