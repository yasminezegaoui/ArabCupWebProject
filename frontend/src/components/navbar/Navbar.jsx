import React from 'react';
import { FaSearch, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-[rgba(241,235,225,1)] px-8 py-4">
      <div className="flex items-center justify-between">

        <h1 className="text-[24px] font-bold leading-[110%] tracking-[0%] text-[rgba(105,9,26,1)] font-['Roboto']">
          ARAB CUP 2025
        </h1>


        <div className="flex items-center space-x-6 text-[16px] font-medium leading-[100%] tracking-[0%] text-[rgba(105,9,26,1)] font-['Roboto']">
          <p>Tournois</p>
          <p>Équipes</p>
          <p>Classement</p>
          <select
            name="rsltCal"
            id="rsltCal"
            className="bg-[rgba(241,235,225,1)] text-[rgba(105,9,26,1)] font-['Roboto'] font-medium text-[16px] leading-[100%] border-none outline-none"
          >
            <option value="" className="cursor-pointer">Résultat & calendrier</option>
          </select>

          <FaSearch className="text-[rgba(105,9,26,1)] w-5 h-5 cursor-pointer" />
          <FaGlobe className="text-[rgba(105,9,26,1)] w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
