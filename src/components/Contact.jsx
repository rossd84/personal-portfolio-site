import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_j1d40vd', 'template_1w09a37', form.current, '_WoPKc3TgkpfOc_4W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	}


	return (
		<section 
			name='contact' 
			className='w-full h-screen bg-secondary flex justify-center items-center p-4' 
			aria-labelledby='contact-section-title'>
			<form className='flex flex-col max-w-[600px] w-full' method='POST' ref={form} onSubmit={sendEmail}>
				<div className='pb-8'>
					<h2 id='contact-section-title' className='text-4xl font-bold inline border-b-4 border-accent text-primary_font'>Contact</h2>
					<p className='text-primary_font py-4'>Submit the form below or shoot me an email - darbyross.dev@gmail.com</p>
				</div>
				<input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='user_name' />
				<input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='user_email' />
				<textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
				<div >
					<button className='text-primary_font border-2 hover:bg-accent hover:border-accent hover:text-primary duration-200 px-4 py-3 my-4 mx-auto' type='submit'>
						Let's Collaborate
					</button>
				</div>
			</form>
		</section>
	)
}

export default Contact
