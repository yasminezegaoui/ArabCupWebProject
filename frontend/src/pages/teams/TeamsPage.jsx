import React, { useRef, useState, useEffect } from 'react';
import { FaSearch, FaChevronRight } from 'react-icons/fa';
import player1 from '../../../public/assets/player_1.png'
import player2 from '../../../public/assets/player_2.png'
import player3 from '../../../public/assets/player_3.png'
import player4 from '../../../public/assets/player_4.png'

const TeamsPage = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
      setTimeout(handleScroll, 100);
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
      setTimeout(handleScroll, 100);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="bg-[rgba(243,238,229,1)] min-h-screen px-8 py-10 relative">

      <div className="flex justify-center mb-20">
        <div className="relative w-245.5 h-15.25">
          <input
            type="text"
            placeholder="Checher joueur"
            className="w-full h-full pl-14 pr-4 rounded-[30px] border border-[rgba(105,9,26,1)] bg-white focus:outline-none text-[16px] font-medium text-[rgba(105,9,26,1)] font-['Roboto'] placeholder:text-[rgba(105,9,26,1)]"
          />
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[rgba(105,9,26,1)] w-5 h-5" />
        </div>
      </div>

      <h2 className="text-[25px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%] mb-10">
        L’équipe algérienne
      </h2>


      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player1}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player2}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player1}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player2}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player1}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player2}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player1}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

        </div>

        {canScrollRight && (
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[rgba(105,9,26,0.1)]"
          >
            <FaChevronRight className="text-[rgba(105,9,26,1)] w-5 h-5" />
          </button>
        )}

        {canScrollLeft && (
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[rgba(105,9,26,0.1)]"
          >
            <FaChevronRight className="rotate-180 text-[rgba(105,9,26,1)] w-5 h-5" />
          </button>
        )}

        

      </div>

      <h2 className="text-[25px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%] mb-10 mt-20">
        L’équipe Marrocaine 
      </h2>


      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player3}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player4}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player3}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player4}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player3}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player4}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

          <div className="shrink-0 w-83">
            <div className="w-83 h-100 border-2 border-[rgba(105,9,26,1)] rounded-[20px] overflow-hidden bg-white">
              <img
                src={player3}
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-83 h-13 border-2 border-[rgba(105,9,26,1)] rounded-[30px] mt-4 flex items-center justify-center bg-white">
              <span className="text-[16px] font-medium text-[rgba(0,0,0,1)] font-['Roboto Mono'] leading-[130%] tracking-[0%]">
                Milieu de terrain
              </span>
            </div>
          </div>

        </div>

        {canScrollRight && (
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[rgba(105,9,26,0.1)]"
          >
            <FaChevronRight className="text-[rgba(105,9,26,1)] w-5 h-5" />
          </button>
        )}

        {canScrollLeft && (
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[rgba(105,9,26,0.1)]"
          >
            <FaChevronRight className="rotate-180 text-[rgba(105,9,26,1)] w-5 h-5" />
          </button>
        )}

        

      </div>
    </div>
  );
};

export default TeamsPage;


