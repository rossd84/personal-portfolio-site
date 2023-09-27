import React from 'react'
import Section from './layouts/Section'

const About = () => {
	return (
		<Section 
			header="About"
			bgColor='bg-secondary-500'
		>
			<div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8'>
					<div className='text-2xl font-bold'>
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
		</Section>
	)
}

export default About
