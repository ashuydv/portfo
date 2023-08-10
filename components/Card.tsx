import React from 'react';

type Props = {
    card: {
        title: string;
        subtitle: string[] | string; // Accept either an array or a single string
        content: string;
        color: string;
    };
};

const Card: React.FC<Props> = ({ card: { title, subtitle, content, color } }) => {

    return (
        <div
            style={{
                background: color,
            }}
            className=" bg-[#fff] p-6 rounded-[8px] border-4 border-black drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] min-h-[280px] max-h-[320px]">
            <h2 className="text-[22px] text-[#171717] font-bold min-h-[56px] max-h-[60px] h-full title-font mb-2">{title}</h2>
            <div className="flex flex-wrap mb-3">
                {subtitle.map((sub: string, index: number) => (
                    <span key={index} className="inline-block py-1 px-2 rounded bg-[#f9f9f9] border-2 border-black text-xs m-0.5 mr-0.5 font-medium">
                        {sub}
                    </span>
                ))}
            </div>
            <p className="leading-relaxed font-semibold text-base">{
                content.slice(0, 100).concat('...')
            }</p>
        </div>
    );
};

export default Card;
