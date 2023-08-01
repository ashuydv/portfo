import React from 'react'

type Props = {}

const HeaderInfo = (props: Props) => {
    return (
        <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Ashutosh Yadav</h1>
                <div className="h-1 w-20 bg-[#171717] rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full font-medium leading-relaxed text-[#151515]">
                Hello there! I'm passionate about crafting and developing products that make a real impact. As a product enthusiast and builder, I thrive on turning ideas into reality and leveraging technology to solve problems creatively.
            </p>
        </div>
    )
}

export default HeaderInfo