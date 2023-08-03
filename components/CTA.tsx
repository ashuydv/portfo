import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
                <div className="lg:w-1/2 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-bold title-font text-gray-900">
                        Connect with me on social media
                    </h1>
                    <Link
                        href="https://www.linkedin.com/in/ashuydv18/"
                    >
                        <a
                            className="flex-shrink-0 text-black border-2 border-black bg-white font-medium rounded-[5px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]  h-12 py-2 px-8 focus:outline-none text-lg mt-10 sm:mt-0"
                        >
                            LinkedIn
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA