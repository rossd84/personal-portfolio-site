import React from 'react'
import { data } from '../data/data.js'

const Work = () => {
	// projects file
	const project = data
	//setProject(data);

	return (
		<section 
			name='work' 
			className='w-full py-[10rem] text-primary_font bg-primary' 
			aria-labelledby='work-section-title'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<h2 id='work-section-title' className='text-4xl font-bold inline border-b-4 border-accent'>Work</h2>
					<p className='py-6'>Check out some of my recent work</p>
				</div>

				{/* container for projects */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* Grid Item */}
					{project.map((item, index) => (
						<div
							key={index}
							style={{ backgroundImage: `url(${item.image})` }}
							className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
							{/* Hover effect for images */}
							<div className='opacity-0 group-hover:opacity-100 content-div-overlay w-full h-full flex flex-col justify-center items-center duration-300'>
								<span className='text-2xl font bold text-white tracking-wider '>{item.name}</span>
								<div className='pt-8 text-center '>
									{/* eslint-disable-next-line */}
									<a href={item.github} target='_blank'>
										<button
											className='text-center rounded-lg w-[80px] py-2 m-2 bg-accent text-primary_font font-bold text-lg'>
											Code
										</button>
									</a>
									{/* eslint-disable-next-line */}
									<a href={item.live} target='_blank'>
										<button
											className='text-center rounded-lg w-[80px] py-2 m-2 border-2 border-accent text-primary_font font-bold text-lg'>
											Live
										</button>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Work
