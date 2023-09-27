import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Section from './layouts/Section';

const Contact = () => {
	const [emailSent, setEmailSent] = useState(false);
	const form = useRef();

	const sendEmail = async (e) => {
		e.preventDefault();

		if (emailSent === false) {

			await emailjs.sendForm('service_j1d40vd', 'template_1w09a37', form.current, '_WoPKc3TgkpfOc_4W')
				.then((result) => {
						console.log(result.text);
				}, (error) => {
						console.log(error.text);
				});
			
				setEmailSent(true);
		}

	}


	return (
		<Section
			header='Contact Me'
			subheader='Submit the form below or shoot me an email - darbyross.dev@gmail.com'
			bgColor='bg-secondary-500'
		>
				<form className='flex flex-col max-w-[600px] w-full text-primary-500' method='POST' ref={form} onSubmit={sendEmail}>
					<input 
						className='bg-custom_gray-500 rounded-sm p-2' 
						type='text' 
						placeholder='Name' 
						name='user_name'
						required />
					<input 
						className='my-4 p-2 bg-custom_gray-500 rounded-sm' 
						type='email' 
						placeholder='Email' 
						name='user_email'
						required
					/>
					<textarea 
					className='bg-custom_gray-500 rounded-sm p-2' 
					name='message' 
					rows='10' 
					placeholder='Message'
					required
					/>
					<div >
						<button className='rounded-sm text-custom_gray-500 border-2 hover:bg-accent-500 hover:border-accent-500 hover:text-primary-500 duration-200 px-4 py-3 my-4 mx-auto' type='submit'>
							Let's Collaborate
						</button>
					</div>
				</form>
		</Section>
	)
}

export default Contact
