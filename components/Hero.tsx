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
          <h2 className="text-[28px] font-bold text-left text-[#171717] mb-8">Projects ...</h2>
          <div className="grid grid-cols-4 gap-4">
            {latestCards.map((card, index) => (
              <div key={index}>
                <Card card={card}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
