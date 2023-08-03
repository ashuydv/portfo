// components/ProjectInfo.js

import React from 'react';
import Card from './Card';
import Link from 'next/link';
import cards from './cards';

const ProjectInfo = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="grid grid-cols-4 gap-5">
                    {cards.map((card, index) => (
                        <div key={index} className="">
                            <Link href={`/projects/${index}`} passHref>
                                <a>
                                    <Card card={card} />
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;
