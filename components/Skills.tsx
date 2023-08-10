import React from 'react';
import next from 'public/icons/nextjs.svg';
import Image from 'next/image';
import tailwindcss from 'public/icons/tailwindcss.svg';
import nodejs from 'public/icons/nodejs.svg';
import mongodb from 'public/icons/mongodb.svg';
import firebase from 'public/icons/firebase.svg';
import git from 'public/icons/git.svg';
import python from 'public/icons/python.svg';
import html from 'public/icons/html.svg';
import reactNative from 'public/icons/reactNative.svg';
import css from 'public/icons/css.svg';
import solana from 'public/icons/solana.png';
import ethereum from 'public/icons/ethereum.svg';
import googleAnalytics from 'public/icons/googleanalytics.svg';

const Skills = () => {
    const skills = [
        {
            label: 'React',
            imageUrl: reactNative,
        },
        {
            label: 'Next.js',
            imageUrl: next,
        },
        {
            label: 'Tailwind CSS',
            imageUrl: tailwindcss,
        },
        {
            label: 'Node.js',
            imageUrl: nodejs,
        },
        {
            label: 'MongoDB',
            imageUrl: mongodb,
        },
        {
            label: 'Firebase',
            imageUrl: firebase,
        },
        {
            label: 'GitHub',
            imageUrl: git,
        },
        {
            label: 'Python',
            imageUrl: python,
        },
        {
            label: 'React Native',
            imageUrl: reactNative,
        },
        {
            label: 'HTML5',
            imageUrl: html,
        }, {
            label: 'CSS3',
            imageUrl: css,
        }, {
            label: 'Solana',
            imageUrl: solana,
        }, {
            label: 'Ethereum',
            imageUrl: ethereum,
        }, {
            label: 'Google Analytics',
            imageUrl: googleAnalytics,
        }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 pb-20 mx-auto">
                <div className="mb-8">
                    <h2 className="text-[28px] font-semibold title-font text-gray-900 mb-4">Skills !!</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white border-2 border-[#171717] rounded-[4px] text-center text-lg justify-center drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] flex p-2 py-4 h-full items-center">
                                <Image
                                    src={skill.imageUrl}
                                    alt={skill.label}
                                    width={30}
                                    height={30}
                                />
                                <span className="title-font font-medium mx-2 text-[#171717]">{skill.label}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
