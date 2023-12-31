import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import cards from 'components/cards';
import Link from 'next/link';
import banner from 'public/banner.png';
import Image from 'next/image';

const ProjectDetails = () => {
    const router = useRouter();
    const { index } = router.query;

    // Convert the index to a number, and check if it's valid
    const projectIndex = Number(index);
    const projectData = projectIndex >= 0 && projectIndex < cards.length ? cards[projectIndex] : null;

    if (!projectData) {
        // Handle the case when the project data is not found or the index is invalid
        return (
            <Layout>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <p className="text-red-500 text-3xl font-medium mb-4">Project Not Found</p>
                        <Link href="/projects">
                            <a className="text-gray-900 font-medium title-font text-left mb-6 underline w-5/6">
                                Back to Projects
                            </a>
                        </Link>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Link href="/projects">
                        <a className="text-gray-900 font-medium title-font text-left mb-6 underline w-5/6">
                            Back to Projects
                        </a>
                    </Link>
                    <Image className="w-[320px]  mb-10 h-48 object-cover object-center rounded-xl" alt="hero" src={banner} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">{projectData.title}</h1>
                        <p className="mb-8 leading-relaxed font-medium text-[18px]">{projectData.content}</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectDetails;
