import React from 'react'
import Section from './layouts/Section'
// images
import {
  bgLarge,
  bgMedium,
  bgSmall,
  skillAws,
  skillCss,
  skillHtml,
  skillJs,
  skillMongo,
  skillNode,
  skillReact,
  skillGit,
} from '../assets'

const Skills = () => {
  const skillList = [
    {
      name: 'HTML',
      img: skillHtml,
      imgAlt: 'HTML icon',
    },
    {
      name: 'CSS',
      img: skillCss,
      imgAlt: 'CSS icon',
    },
    {
      name: 'JAVASCRIPT',
      img: skillJs,
      imgAlt: 'JavaScript icon',
    },
    {
      name: 'REACT',
      img: skillReact,
      imgAlt: 'React icon',
    },
    {
      name: 'GIT',
      img: skillGit,
      imgAlt: 'Git icon',
    },
    {
      name: 'NODE',
      img: skillNode,
      imgAlt: 'NodeJS icon',
    },
    {
      name: 'AWS',
      img: skillAws,
      imgAlt: 'AWS icon',
    },
    {
      name: 'MONGODB',
      img: skillMongo,
      imgAlt: 'MongoDB icon',
    },
  ]

  return (
    <Section
      header="Skills"
      subheader="These are a few of the technologies that I've worked with"
      classes="parallax w-full py-[10rem] text-primary_font bg-[image:var(--image-url-sm)] md:bg-[image:var(--image-url-md)] lg:bg-[image:var(--image-url-lg)]"
      style={{
        '--image-url-lg': `url(${bgLarge})`,
        '--image-url-md': `url(${bgMedium})`,
        '--image-url-sm': `url(${bgSmall})`,
      }}
      ariaLabelledBy="skills-section-title"
    >
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="shadow-md shadow-primary-900 hover:scale-110 duration-500 bg-primary-500 p-4 rounded-md"
          >
            <img className="w-20 mx-auto" src={skill.img} alt={skill.imgAlt} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
