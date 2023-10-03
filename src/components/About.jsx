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
						<p>Welcome. Nice to meet you.</p>
					</div>
					<div>
						<p>
							Welcome to my portfolio! I'm Darby, a passionate web developer based in Mississippi with four years of experience in crafting digital solutions that bridge the gap between creativity and functionality. My journey in the world of web development has allowed me to work with a diverse range of clients, from small businesses looking to establish their online presence to large enterprises seeking robust, fullstack applications. I thrive on turning ideas into dynamic, user-friendly websites and applications that not only meet but exceed expectations. With a keen eye for design and a deep understanding of the latest technologies, I'm committed to delivering web solutions that not only look great but also perform flawlessly. Explore my portfolio to see some of my exciting projects and discover how I can help bring your web-based ideas to life.
						</p>
					</div>
				</div>
		</Section>
	)
}

export default About
