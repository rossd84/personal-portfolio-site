import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Mongo from '../assets/mongo.png'
import BgImgLg from '../assets/bg/bg2-lg.png'
import BgImgMd from '../assets/bg/bg2-md.png'
import BgImgSm from '../assets/bg/bg2-sm.png'

const Skills = () => {
	return (
		<section 
			name='skills' 
			className='parallax w-full py-[10rem] text-primary_font bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)]' 
			style={{'--image-url-lg': `url(${BgImgLg})`, '--image-url-md': `url(${BgImgMd})`, '--image-url-sm': `url(${BgImgSm})`}}
			aria-labelledby='skills-section-title'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<h2 id='skills-section-title' className='text-4xl font-bold inline border-b-4 border-accent'>Skills</h2>
					<p className='py-4'>These are the technologies that I've worked with</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
						<p>HTML</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
						<p>CSS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
						<p>JAVASCRIPT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={ReactImg} alt='React  icon' />
						<p>REACT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={GitHub} alt='GitHub icon' />
						<p>GITHUB</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={Node} alt='Node icon' />
						<p>NODE</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={AWS} alt='AWS icon' />
						<p>AWS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-primary p-2 rounded-md'>
						<img className='w-20 mx-auto' src={Mongo} alt='MongoDB icon' />
						<p>MONGODB</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
