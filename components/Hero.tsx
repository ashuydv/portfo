import React from 'react'
import Card from 'components/Card'
import HeaderInfo from './HeaderInfo'

const Home = () => {
  return (
    <section className="text-[#171717] body-font">
      <div className="container px-5 pt-24 pb-14 mx-auto w-11/12">
        <HeaderInfo />
        <div className='py-4'>
          <h2 className="text-2xl font-medium text-left text-[#171717] mb-8">
            Projects ...
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Card
                card={{
                  title: 'The Colosseum',
                  subtitle: 'SUBTITLE',
                  content: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
                  image: 'https://dummyimage.com/720x400'
                }}
              />
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#fff] p-6 rounded-[8px] border-2 border-[#171717] min-h-[400px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                <img className="h-40 rounded w-full object-cover object-center mb-6 border-2 border-[#171717]" src="https://dummyimage.com/721x401" alt="content" />
                <h3 className="tracking-widest text-[#171717] text-xs font-semibold title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base font-medium">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#fff] p-6 rounded-[8px] border-2 border-[#171717] min-h-[400px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                <img className="h-40 rounded w-full object-cover object-center mb-6 border-2 border-[#171717]" src="https://dummyimage.com/722x402" alt="content" />
                <h3 className="tracking-widest text-[#171717] text-xs font-semibold title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base font-medium">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#fff] p-6 rounded-[8px] border-2 border-[#171717] min-h-[400px] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                <img className="h-40 rounded w-full object-cover object-center mb-6 border-2 border-[#171717]" src="https://dummyimage.com/723x403" alt="content" />
                <h3 className="tracking-widest text-[#171717] text-xs font-semibold title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base font-medium">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home