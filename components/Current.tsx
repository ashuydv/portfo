import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the import path

const Current = () => {
  return (
    <section className="text-[#171717] rounded-[10px] body-font">
      <div className="container px-5 py-12 mx-auto">
        <h2 className="text-[28px] font-extrabold text-left text-[#171717] mb-10">
          Currently Working On ...
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <ProjectCard
            title=" Bounty Radar - Connecting Crypto Enthusiasts with Bounties"
            description="Bounty Radar is a comprehensive platform designed to bridge the gap between crypto enthusiasts and bounties offered by various projects within the blockchain ecosystem. It serves as a centralized hub where users can discover, explore, and participate in a wide range of bounties, allowing them to leverage their skills and expertise to earn cryptocurrency rewards."
            link="https://github.com"
            color="#ff843f"
          />
          <ProjectCard
            title="News Summarizer - Summarizing News Articles with NLP"
            description="
            News Summarizer is a web application that summarizes news articles using Natural Language Processing (NLP). It is built using React, Flask, and the Hugging Face Transformers library. The application allows users to enter a URL to a news article, and it will return a summary of the article. The summary is generated using the T5 model from the Hugging Face Transformers library."
            link="https://github.com"
            color="#5398ff"
          />
        </div>
      </div>
    </section>
  );
}

export default Current;
