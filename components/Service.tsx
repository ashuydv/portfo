import Link from 'next/link';
import React from 'react';

const Service = () => {
    return (
        <div>
            <section className="text-[#171717] body-font">
                <div className="container px-5 pt-4 pb-12 mx-auto">
                    <h2 className="text-2xl font-bold text-left text-[#171717] mb-10">
                        Experiences & ? ...
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Item 1 */}
                        <div className="grid grid-rows-1 gap-5">
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                        Drypto (Technical Product Manager)
                                    </h2>
                                    <span className="flex flex-row items-end mb-1">
                                        <span className="text-sm text-gray-500">June 2023 - Present / </span>
                                        <span className="text-sm text-gray-500 mx-2">Bangalore, India</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed text-base mb-4">
                                    Worked as a Technical Product Manager as well as a Full Stack Developer for the time being, wherein i developed products around web3, blockchain, and data intelligence.
                                </p>
                                <ul className=' list-disc pl-4'>
                                    <li className="mb-2">
                                        Developed web3 based data gathering platform,
                                    </li>
                                    <li className="mb-2">
                                        Developed a extension for summarizing various crypto projects and their social media presence. (in working)
                                    </li>
                                </ul>
                                <Link
                                    href="https://drypto.vercel.app/"
                                >
                                    <a className="text-black inline-flex mt-5 items-center underline underline-offset-4">Learn More</a>
                                </Link>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                        MetagenStudios LLP
                                    </h2>
                                    <span className="flex flex-row items-end mb-1">
                                        <span className="text-sm text-gray-500">Feb 2022 - Jan 2023 / </span>
                                        <span className="text-sm text-gray-500 mx-2">Remote</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed text-base mb-4">
                                    A Freelance Developer with 2+ years of experience in building web apps, and apps, with technologies like MERN Stack, React Native, Shopify etc, along with building products and handling decentralization and making them more scalable and easier to use !!
                                </p>
                                <Link
                                    href="#"
                                >
                                    <a className="text-black inline-flex mt-5 items-center underline underline-offset-4">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            {/* Item 3 */}
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                        Surfguild (Content Manager)
                                    </h2>
                                    <span className="flex flex-row items-end mb-1">
                                        <span className="text-sm text-gray-500">Nov 2022 - Feb 2023 / </span>
                                        <span className="text-sm text-gray-500 mx-2">Remote / Singapore</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed text-base mb-4">
                                    Was trying something out of the box and loved it, but still lazy continuing it, but i am sure i will be back to it soon, and will be working on it full time (really !!)
                                </p>
                                <Link
                                    href="#"
                                >
                                    <a className="text-black inline-flex mt-5 items-center underline underline-offset-4">Learn More</a>
                                </Link>
                            </div>

                            {/* Item 4 */}
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                        Quikchex (Freelance Web Developer)
                                    </h2>
                                    <span className="flex flex-row items-end mb-1">
                                        <span className="text-sm text-gray-500">Sep 2022 - Dec 2022 / </span>
                                        <span className="text-sm text-gray-500 mx-2">Remote, India</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed text-base mb-4">
                                    Developed web apps and fixed bugs in their frontend code along with managing and finding out bugs accordingly !!
                                </p>
                                <ul className=' list-disc pl-4'>
                                    <li className="mb-2">
                                        Fixed bugs and converted Figma 2 HTML
                                    </li>
                                    <li className="mb-2">
                                        API Integration and Management
                                    </li>
                                </ul>
                                <Link
                                    href="https://drypto.vercel.app/"
                                >
                                    <a className="text-black inline-flex mt-5 items-center underline underline-offset-4">Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 my-5 gap-5">
                        {/* Item 5 */}
                        <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                    Townhall Ventures (PM)
                                </h2>
                                <span className="flex flex-row items-end mb-1">
                                    <span className="text-sm text-gray-500">March 2021 - Dec 2022</span>
                                </span>
                            </div>
                            <p className="leading-relaxed text-base mb-4">
                                We build a suite of products and services to help our portfolio companies grow and scale.</p>
                            <ul className=' list-disc pl-4'>
                                <li className="mb-2">
                                    Brainstorming and ideating with cross-functional teams to define, design, and ship new features.
                                </li>
                                <li className="mb-2">
                                    Working with the product team to design and build new features and products.
                                </li>
                            </ul>
                            <Link
                                href="https://drypto.vercel.app/"
                            >
                                <a className="text-black inline-flex mt-5 items-center underline underline-offset-4">Learn More</a>
                            </Link>
                        </div>
                        {/* Item 5 */}
                        <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                    TSF (Web Developer Intern)
                                </h2>
                                <span className="flex flex-row items-end mb-1">
                                    <span className="text-sm text-gray-500">May 2021 - Jun 2021</span>
                                </span>
                            </div>
                            <p className="leading-relaxed text-base mb-4">
                                Was given a task to complete and work on several projects while making it live !!
                            </p>
                            <Link
                                href="https://drypto.vercel.app/"
                            >
                                <a className="text-black inline-flex mt-5 items-center underline underline-offset-4">Learn More</a>
                            </Link>
                        </div>
                        {/* Item 5 */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;
