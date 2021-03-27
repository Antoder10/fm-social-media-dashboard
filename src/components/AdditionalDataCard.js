import React from 'react';

import UpIcon from '../images/icon-up.svg';
import DownIcon from '../images/icon-down.svg';

const isNegativeVariation = variation => {
  if (Math.sign(parseInt(variation)) === -1) return true;
}

const replaceNegativeSign = text => text.replace('-', '');

const AdditionalDataCard = ({data}) => {

  return (
    <div className="flex flex-col bg-light-grayish-blue hover:bg-very-pale-blue p-10 rounded-md shadow-md cursor-pointer dark:hover:bg-desaturated-blue dark:bg-dark-desaturated-blue">
      <div className="flex flex-row mb-6 items-center justify-between">
        <span className="font-bold text-dark-grayish-blue">{Object.keys(data)[1]}</span>
        <img src={`/images/icon-${data.name.toLowerCase()}.svg`} alt={`icon-${data.name}`} className="ml-auto w-6"/>
      </div>
      <div className="flex flex-row items-center justify-between">
        <span className="font-bold text-4xl text-black dark:text-white">{data[Object.keys(data)[1]]}</span>
        <span className={`font-bold text-sm ${isNegativeVariation(data[Object.keys(data)[2]]) ? 'text-red-600' : 'text-green-600'}`}>
          <img className="inline mr-0.5" alt="icon" src={isNegativeVariation(data[Object.keys(data)[2]]) ? DownIcon : UpIcon} alt="sadas" />
          {replaceNegativeSign(data[Object.keys(data)[2]])}
        </span>
      </div>
    </div>
  )
}

export default AdditionalDataCard;
