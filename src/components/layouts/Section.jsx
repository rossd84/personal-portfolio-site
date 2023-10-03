import React from 'react'

const Section = (
	{
		id,
		header, 
		subheader,
		name,
		bgColor='bg-primary-500', 
		paddingX=12, 
		classes='',
		style, 
		children
	}) => {
	let sectionName = name ? name : 'section'
	let ariaLabelledBy = name ? `${name}-section-title` : 'section-title'

	if (header && !name) {
		sectionName = header.toLowerCase();
		ariaLabelledBy = `${header.toLowerCase()}-section-title`
	}

	const classList = `w-full py-[10rem] px-${paddingX} ${bgColor} text-custom_gray-500 ${classes}`

  return (
    <section 
			id={id && id}
			name={sectionName} 
			className={classList}
			style={style} 
			aria-labelledby={ariaLabelledBy}>
			<div className='flex flex-col w-full max-w-[1000px] mx-auto h-full'>
				{
					header && 
					<div className='max-w-[1000px] w-full mb-8 flex justify-center md:justify-start flex-col'>
						<div className='flex'>
							<h2 id={`${name}-section-title`} className='text-3xl md:text-4xl text-custom_gray-500 font-bold border-b-4 border-accent-500 tracking-wider'>{header}</h2>
						</div>
						{
							subheader && 
							<p className='py-4'>{subheader}</p>
						}
					</div>
				}
        { children }
			</div>
		</section>
  )
}

export default Section