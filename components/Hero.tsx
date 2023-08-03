import React from 'react';
import Card from 'components/Card';
import HeaderInfo from './HeaderInfo';
import cards from './cards';

const Home = () => {
  // Get the latest four cards
  const latestCards = cards.slice(-4);

  return (
    <section className="text-[#171717] body-font">
      <div className="container px-5 pt-24 pb-14 mx-auto">
        <HeaderInfo />
        <div className="py-4">
          <h2 className="text-2xl font-medium text-left text-[#171717] mb-8">Projects ...</h2>
          <div className="flex flex-wrap -m-4">
            {latestCards.map((card, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
