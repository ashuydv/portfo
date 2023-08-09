import React from 'react'

type Props = {
    title: string
    link: string
    description: string,
    color: string
}

const ProjectCard = ({ title, link, description, color }
    : Props
) => (
    <div
        style={{
            background: color,
        }}
        className={`border-4 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]`}>
        <h3 className="text-[26px] font-bold text-[#171717] mb-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </h3>
        <p className="leading-relaxed text-[18px] mb-5">{description}</p>
        <button
            className='bg-[#171717] text-white py-2 px-4 rounded-[5px] hover:bg-[#171717] hover:text-white'
        >
            <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </button>
    </div>
);

export default ProjectCard