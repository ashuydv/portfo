import React from 'react';

const Service = () => {
    return (
        <div>
            <section className="text-[#171717] body-font">
                <div className="container px-5 pt-4 pb-12 mx-auto">
                    <h2 className="text-2xl font-bold text-left text-[#171717] mb-10">
                        Experiences & Services ...
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Item 1 */}
                        <div className="grid grid-rows-1 gap-5">
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                    Shooting Stars
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sunt eum
                                    voluptatibus ipsum ducimus earum, molestiae rerum blanditiis nulla. Incidunt
                                    consequuntur rerum fuga ducimus illo? Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sapiente sunt eum voluptatibus ipsum ducimus earum, molestiae
                                    rerum blanditiis nulla. Incidunt consequuntur rerum fuga ducimus illo?...
                                </p>
                                <a className="text-black inline-flex items-center">Learn More</a>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                    Shooting Stars
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sunt eum
                                    voluptatibus ipsum ducimus earum, molestiae rerum blanditiis nulla. Incidunt
                                    consequuntur rerum fuga ducimus illo?...
                                </p>
                                <a className="text-black inline-flex items-center">Learn More</a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            {/* Item 4 */}
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                    Shooting Stars
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sunt eum
                                    voluptatibus ipsum ducimus earum, molestiae rerum blanditiis nulla. Incidunt
                                    consequuntur rerum fuga ducimus illo?...
                                </p>
                                <a className="text-black inline-flex items-center">Learn More</a>
                            </div>

                            {/* Item 3 */}
                            <div className="bg-white border-2 border-[#171717] rounded-[8px] p-8 font-medium drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-lg md:text-xl text-gray-900 font-semibold title-font mb-2">
                                    Shooting Stars
                                </h2>
                                <p className="leading-relaxed text-base mb-4">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sunt eum
                                    voluptatibus ipsum ducimus earum, molestiae rerum blanditiis nulla. Incidunt
                                    consequuntur rerum fuga ducimus illo? Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sapiente sunt eum voluptatibus ipsum ducimus earum, molestiae
                                    rerum blanditiis nulla. Incidunt consequuntur rerum fuga ducimus illo?...
                                </p>
                                <a className="text-black inline-flex items-center">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;
