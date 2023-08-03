import React from 'react';

const Skills = () => {
    const skills = [
        {
            label: 'React',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        },
        {
            label: 'Next.js',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/nextjs-3.svg',
        },
        {
            label: 'Tailwind CSS',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
        },
        {
            label: 'Node.js',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        },
        {
            label: 'Express.js',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
        },
        {
            label: 'MongoDB',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
        },
        {
            label: 'Firebase',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
        },
        {
            label: 'Git',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
        },
        {
            label: 'GitHub',
            imageUrl: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
        },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-8 pb-12 mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-medium title-font text-gray-900 mb-4">Skills !!</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white border-2 border-[#171717] rounded-[4px] text-center justify-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] flex p-2 py-3 h-full items-center">
                                <span className="title-font font-medium text-[#171717]">{skill.label}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
