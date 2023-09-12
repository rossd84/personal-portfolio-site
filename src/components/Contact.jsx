import React from 'react'

const Contact = () => {
	const action_url = 'https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c'
	return (
		<section 
			name='contact' 
			className='w-full h-screen bg-secondary flex justify-center items-center p-4' 
			aria-labelledby='contact-section-title'>
			<form method='POST' action={action_url} className='flex flex-col max-w-[600px] w-full'>
				<div className='pb-8'>
					<h2 id='contact-section-title' className='text-4xl font-bold inline border-b-4 border-accent text-primary_font'>Contact</h2>
					<p className='text-primary_font py-4'>Submit the form below or shoot me an email - darbyross.dev@gmail.com</p>
				</div>
				<input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
				<input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
				<textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
				<button className='text-primary_font border-2 hover:bg-accent hover:border-accent hover:text-primary duration-200 px-4 py-3 my-8 mx-auto flex items-center'>
					Let's Collaborate
				</button>
			</form>
		</section>
	)
}

export default Contact
