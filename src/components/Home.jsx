import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import BgImgLg from '../assets/bg/bg-hero-lg.png'
import BgImgMd from '../assets/bg/bg-hero-md.png'
import BgImgSm from '../assets/bg/bg-hero-sm.png'

const Home = () => {
	return (
		<section name='home' className='parallax w-full h-screen bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)]' style={{'--image-url-lg': `url(${BgImgLg})`, '--image-url-md': `url(${BgImgMd})`, '--image-url-sm': `url(${BgImgSm})`}}>
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-accent'>Hi, my name is</p>
				<h1 className='text-4xl sm:text-7xl font-bold text-primary_font pb-2 tracking-wide'>Darby Ross</h1>
				<h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0] tracking-wide'>I'm a Full Stack Developer</h2>
				<p className='text-[#8892b0] py-4 max-w-[700px]'>
					I'm a full-stack developer specializing in building and designing exceptional digital experiences. Currently,
					I'm focused on building responsive full-stack web applications.
				</p>
				<div>
					<button 
						className='text-primary_font hover:text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-accent hover:border-accent duration-200'
						type='button'>
						<Link
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
		</section>
	)
}

export default Home
