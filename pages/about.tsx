import Layout from 'components/Layout'
import React from 'react'

const About = () => {
    return (
        <Layout>
            <div className="min-h-screen p-4">
                <section className="text-black body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-col">
                        <div className="w-full mx-auto">
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-48 h-48 rounded-full border-4 border-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] inline-flex items-center justify-center bg-gray-200 ">
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className=" font-bold title-font mt-4 text-[28px]">Ashutosh Yadav</h2>
                                        <div className="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                                        <p className="text-[18px] font-semibold">
                                            Technical Product Manager at <a href="" target="_blank" className="text-[#713fe5]">Drypto, </a>
                                        </p>
                                        <p className="text-[18px] font-semibold">
                                            Ex-Product Manager at <a href="" target="_blank" className="text-[#467df3]">
                                                Townhall Ventures </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l-2 border-black sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <h3 className="text-2xl mb-6 leading-tight font-bold text-black title-font">
                                        🚀 Product Enthusiast | Builder | Web Developer | Innovator 🚀
                                    </h3>
                                    <p className="leading-relaxed text-lg mb-4 text-justify">
                                        Hello there! I'm passionate about crafting and developing products that make a real impact. As a product enthusiast and builder, I thrive on turning ideas into reality and leveraging technology to solve problems creatively.
                                    </p>
                                    <hr />
                                    <div
                                        className="bg-[#f7f7f7] border border-[#eaeaea] rounded-md px-5 py-8 mt-4 text-[#4a4a4a]"
                                    >
                                        <h3 className="text-xl mb-6 leading-tight font-bold text-black title-font">
                                            💡 About Me:
                                        </h3>
                                        <ul
                                            className="list-item space-y-2"
                                        >
                                            <li>
                                                <span className="font-semibold">Product Enthusiast:</span> I have a deep love for creating innovative solutions that add value to users' lives and transform industries.
                                            </li>
                                            <li>
                                                <span className="font-semibold">Full Stack:</span> With over 2 years of hands-on experience in web application development, I have honed my skills in crafting seamless user experiences and bringing ideas to life through code.
                                            </li>
                                            <li>
                                                <span className="font-semibold">Web3 & Web3:</span>  I am well-versed in both web3 and web2 technologies, adapting to the ever-changing digital landscape and exploring the potential of decentralized applications.
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div
                                        className="bg-[#f7f7f7] border border-[#eaeaea] rounded-md px-5 py-8 mt-4 text-[#131313]"
                                    >
                                        <h3 className="text-xl mb-6 leading-tight font-bold text-[#131313] title-font">
                                            💼 Professional Background:</h3>
                                        <p>
                                            In my career journey, I have collaborated with diverse teams, learned from different perspectives, and contributed to various projects that have left a lasting impact. I thrive in dynamic environments where continuous learning and growth are encouraged.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default About