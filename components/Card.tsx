import React from 'react'

type Props = {
    card: {
        title: string,
        subtitle: string,
        content: string,
        image: string
    }
}

const Card = (
    {
        card: {
            title,
            subtitle,
            content,
            image
        }
    }: Props
) => {
    return (
        <div className="bg-[#fff] p-6 rounded-[8px] border-2 border-[#171717] min-h-[400px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]"
        >
            <img className="h-40 rounded w-full object-cover object-center mb-6 border-2 border-[#171717]" src={image} alt="content" />
            <h3 className="tracking-widest text-[#171717] text-xs font-semibold title-font">{subtitle}</h3>
            <h2 className="text-lg text-[#171717] font-bold title-font mb-4">{title}</h2>
            <p className="leading-relaxed font-medium text-base">{content}</p>
        </div>
    )
}

export default Card