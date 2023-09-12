import React from 'react'

const About = () => {
	return (
		<section 
			name='about' 
			className='w-full py-[10rem] bg-secondary text-primary_font' 
			aria-labelledby='about-section-title'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8'>
						<h2 id='about-section-title' className='text-4xl font-bold inline border-b-4 border-accent'>About</h2>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>Hi. I'm Darby, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I am passionate about building excellent software that improves the lives of those around me. I specialize
							in creating software for clients ranging from individuals and small-businesses all the way to large
							enterprise corporations. What you you do if you had a software expert available at your fingertips?
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
