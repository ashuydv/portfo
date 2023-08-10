import Link from 'next/link';
import React from 'react';

const Service = () => {
    return (
        <div>
            <section className="text-[#171717] body-font">
                <div className="container px-5 py-16 mx-auto">
                    <h2 className="text-[28px] font-bold text-left text-[#171717] mb-10">
                        Experiences ...
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Item 1 */}
                        <div className="grid grid-rows-1 gap-5">
                            {/* Item 1 */}
                            <div className="bg-[#f46f6f] border-4 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-[24px] text-gray-900 font-bold title-font mb-2">
                                            Drypto (Technical Product Manager)
                                        </h2>
                                    </div>
                                    <p className="leading-relaxed text-[18px] mb-4">
                                        Worked as a Technical Product Manager as well as a Full Stack Developer for the time being, wherein I developed products around web3, blockchain, and data intelligence.
                                    </p>
                                    <ul className='list-disc text-[18px] pl-4'>
                                        <li className="mb-2">
                                            Developed web3 based data gathering platform,
                                        </li>
                                        <li className="mb-2">
                                            Developed an extension for summarizing various crypto projects and their social media presence. (in working)
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <Link href="https://drypto.vercel.app/">
                                        <a className="text-black inline-flex items-center underline underline-offset-4 text-[18px]">Learn More</a>
                                    </Link>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-[#31d4ad] border-4 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-[24px] text-gray-900 font-bold title-font mb-2">
                                            MetagenStudios LLP
                                        </h2>
                                    </div>
                                    <p className="leading-relaxed text-[18px] mb-4">
                                        A Freelance Developer with 2+ years of experience in building web apps, and apps, with technologies like MERN Stack, React Native, Shopify etc, along with building products and handling decentralization and making them more scalable and easier to use !!
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <Link href="#">
                                        <a className="text-black inline-flex items-center underline underline-offset-4 text-[18px]">Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 gap-5">
                            {/* Item 3 */}
                            <div className="bg-[#d1a4ff] border-4 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <h2 className="text-[24px] text-gray-900 font-bold title-font mb-2">
                                        Surfguild (Content Manager)
                                    </h2>
                                    <p className="leading-relaxed text-[18px] mb-4">
                                        Was trying something out of the box and loved it, but still lazy continuing it, but I am sure I will be back to it soon, and will be working on it full time (really !!)
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <Link href="#">
                                        <a className="text-black inline-flex items-center underline underline-offset-4 text-[18px]">Learn More</a>
                                    </Link>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="bg-[#53c6ff] border-4 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <h2 className="text-[24px] text-gray-900 font-bold title-font mb-2">
                                        Quikchex (Freelance Web Developer)
                                    </h2>
                                    <p className="leading-relaxed text-[18px] mb-4">
                                        Developed web apps and fixed bugs in their frontend code along with managing and finding out bugs accordingly !!
                                    </p>
                                    <ul className='list-disc pl-4 text-[18px]'>
                                        <li className="mb-2">
                                            Fixed bugs and converted Figma 2 HTML
                                        </li>
                                        <li className="mb-2">
                                            API Integration and Management
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <Link href="https://drypto.vercel.app/">
                                        <a className="text-black inline-flex items-center underline underline-offset-4 text-[18px]">Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 my-5 gap-5">
                        {/* Item 5 */}
                        <div className="bg-[#91db51] border-4 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                            <div>
                                <h2 className="text-[24px] text-gray-900 font-bold title-font mb-2">
                                    Townhall Ventures (PM)
                                </h2>
                                <p className="leading-relaxed text-[18px] mb-4">
                                    We build a suite of products and services to help our portfolio companies grow and scale.</p>
                                <ul className='list-disc pl-4 text-[18px]'>
                                    <li className="mb-2">
                                        Brainstorming and ideating with cross-functional teams to define, design, and ship new features.
                                    </li>
                                    <li className="mb-2">
                                        Working with the product team to design and build new features and products.
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <Link href="https://drypto.vercel.app/">
                                    <a className="text-black inline-flex items-center underline underline-offset-4 text-[18px]">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        {/* Item 6 */}
                        <div className="bg-[#f1a651] border-4 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                            <div>
                                <h2 className="text-[24px] text-gray-900 font-bold title-font mb-2">
                                    TSF (Web Developer Intern)
                                </h2>
                                <p className="leading-relaxed text-[18px] mb-4">
                                    Was given a task to complete and work on several projects while making it live !!
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Link href="https://drypto.vercel.app/">
                                    <a className="text-black inline-flex items-center underline underline-offset-4 text-[18px]">Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;
