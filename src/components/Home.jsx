import React from 'react'
import Section from './layouts/Section'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typed from 'react-typed';
import { Link } from 'react-scroll'
import { heroLarge, heroMedium, heroSmall } from '../assets';

const Home = () => {
	const reactTypedList = [
		"Full Stack",
		"Frontend",
		"Node.js",
		"React",
		"TypeScript",
		"MongoDB",
	]
	return (
		<Section
			id='home'
			classes='parallax w-full h-screen bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)]'
			style={{'--image-url-lg': `url(${heroLarge})`, '--image-url-md': `url(${heroMedium})`, '--image-url-sm': `url(${heroSmall})`}}
			name='home'
		>
				<div className='max-w-[1200px] flex flex-col justify-center h-full gap-2'>
					<h1 className='flex flex-col'>
						<span className='text-accent-500'>Hi, my name is</span>
						<span className='text-4xl md:text-7xl font-bold text-custom_gray-100 pb-2 tracking-wide'>Darby Ross</span>
					</h1>
					<h2 className='flex flex-col text-3xl md:text-5xl font-medium text-custom_gray-600'>
						<pre>
							I'm a <Typed
								className='text-accent-500'
								strings={reactTypedList}
								typeSpeed={80}
								backSpeed={60}
								backDelay={2000}
								loop
							/>
						</pre>
						<span>Developer</span>
					</h2>
					<p className='text-custom_gray-600 py-4 max-w-[700px]'>
						I specialize in building and designing exceptional digital experiences. Currently,
						I'm focused on building responsive full-stack web applications.
					</p>
					<div>
						<button 
							className='rounded-sm text-accent-500 hover:text-custom_gray-900 group border-2 px-6 py-3 my-2 flex items-center hover:bg-accent-500 border-accent-500 duration-200'
							type='button'>
							<Link
								href='#work'
								to='work'
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
								className='flex items-center'>
								View Work
								<span className='group-hover:rotate-90 group-hover:-translate-y-1/4 group-hover:translate-x-1 duration-300'>
									<HiArrowNarrowRight className='ml-3' />
								</span>
							</Link>
						</button>
					</div>
				</div>
		</Section>
	)
}

export default Home
