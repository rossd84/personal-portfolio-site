import React from 'react'
import Section from './layouts/Section'
// images
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

	const skillList = [
		{
			name: 'HTML',
			img: HTML,
			imgAlt: "HTML icon"
		},
		{
			name: 'CSS',
			img: CSS,
			imgAlt: "CSS icon"
		},
		{
			name: 'JAVASCRIPT',
			img: JavaScript,
			imgAlt: "JavaScript icon"
		},
		{
			name: 'REACT',
			img: ReactImg,
			imgAlt: "React icon"
		},
		{
			name: 'GITHUB',
			img: GitHub,
			imgAlt: "GitHub icon"
		},
		{
			name: 'NODE',
			img: Node,
			imgAlt: "NodeJS icon"
		},
		{
			name: 'AWS',
			img: AWS,
			imgAlt: "AWS icon"
		},
		{
			name: 'MONGODB',
			img: Mongo,
			imgAlt: "MongoDB icon"
		},
	]

	return (
		<Section 
			header="Skills"
			subheader="These are a few of the technologies that I've worked with"
			classes='parallax w-full py-[10rem] text-primary_font bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)]' 
			style={{'--image-url-lg': `url(${BgImgLg})`, '--image-url-md': `url(${BgImgMd})`, '--image-url-sm': `url(${BgImgSm})`}}
			ariaLabelledBy='skills-section-title'>

					<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
						{skillList.map(skill => (
							<div key={skill.name} className='shadow-md shadow-primary-900 hover:scale-110 duration-500 bg-primary-500 p-4 rounded-md'>
								<img className='w-20 mx-auto' src={skill.img} alt={skill.imgAlt} />
								<p>{skill.name}</p>
						</div>
						))}
					</div>

		</Section>
	)
}

export default Skills
