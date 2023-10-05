import React from 'react'
import Section from './layouts/Section.jsx'
import { data } from '../data/data.js'

const Work = () => {
  // projects file
  const project = data
  //setProject(data);

  return (
    <Section id="work" header="Work" subheader="Check out some of my recent work" bgColor="bg-primary-700">
      {/* container for projects */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {/* Grid Item */}
        {project.map((item, index) => (
          <div className="max-w-[425px]">
            <div className="lg:hidden mb-2">
              <h3 className="text-lg">{item.name}</h3>
            </div>
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 content-div-overlay w-full h-full flex flex-col justify-between py-12 px-4 items-center duration-300">
                <span className="text-2xl font bold text-white tracking-wider ">{item.name}</span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <button
                        className={
                          item.live
                            ? 'text-center rounded-lg w-[80px] py-2 m-2 bg-accent text-primary_font font-bold text-lg'
                            : 'text-center rounded-lg w-[80px] py-2 m-2 border-2 border-accent text-primary_font font-bold text-lg'
                        }
                      >
                        Code
                      </button>
                    </a>
                  )}
                  {/* eslint-disable-next-line */}
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg w-[80px] py-2 m-2 border-2 border-accent text-primary_font font-bold text-lg">
                        Live
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Work
