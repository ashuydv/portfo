import Layout from 'components/Layout'
import React from 'react'

const About = () => {
    return (
        <Layout>
            <div className="min-h-screen p-4">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-44 h-44 rounded-full border border-black inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img
                                            src="https://media.licdn.com/dms/image/D5603AQHTBKPBaGQ55Q/profile-displayphoto-shrink_200_200/0/1689604170822?e=1696464000&v=beta&t=78NV9zW7h8soZyDmRf20mYmbEaECDdQ5JM5o0vFvT54"
                                            alt="Picture of the author"
                                            width={200}
                                            height={200}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Ashutosh Yadav</h2>
                                        <div className="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                                        <p className="text-base font-medium">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                                    <a className="text-black font-medium inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
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