import React from 'react';

type Props = {
    card: {
        title: string;
        subtitle: string[] | string; // Accept either an array or a single string
        content: string;
    };
};

const Card: React.FC<Props> = ({ card: { title, subtitle, content } }) => {
    const formattedSubtitle = Array.isArray(subtitle) ? subtitle.join(', ') : subtitle;

    return (
        <div className="bg-[#fff] p-6 rounded-[8px] border-2 border-[#171717] min-h-[280px] max-h-[320px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl text-[#171717] font-bold min-h-[56px] max-h-[60px] h-full title-font mb-2">{title}</h2>
            <h3 className="tracking-widest text-[#171717] text-[14px] font-medium title-font mb-4">
                {formattedSubtitle}
            </h3>
            <p className="leading-relaxed font-medium text-base">{
                content.slice(0, 100).concat('...')
            }</p>
        </div>
    );
};

export default Card;
