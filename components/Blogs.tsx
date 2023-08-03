import React from 'react'

const Blogs = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-10 pb-24 mx-auto">
                <h2 className="text-2xl font-medium text-[#171717] mb-10">
                    Our Blogs ...
                </h2>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-black rounded-[5px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] bg-white text-black overflow-hidden">
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-bold mb-1">CATEGORY</h2>
                                <h1 className="title-font text-lg font-medium  mb-2">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3 font-medium">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus quo numquam beatae rem doloremque harum officiis.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-black inline-flex items-center font-medium md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span className=" mr-3 inline-flex items-center lg:ml-auto font-medium md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className=" inline-flex items-center leading-none font-medium text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs