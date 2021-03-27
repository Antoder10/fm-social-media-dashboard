import React from 'react';

import UpIcon from '../images/icon-up.svg';
import DownIcon from '../images/icon-down.svg';

const isNegativeVariation = variation => {
  if (Math.sign(parseInt(variation)) === -1) return true;
}

const replaceNegativeSign = text => text.replace('-', '');

const SocialOverviewCard = ({socialData}) => {
  const { name, username, followers, followersVariation, subscribers, subscribersVariation }= socialData;

  return (
    <div className={`flex flex-col bg-light-grayish-blue hover:bg-very-pale-blue mb-8 py-6 border-t-8 border-${name.toLowerCase()} cursor-pointer rounded-md shadow-md items-center sm:px-16 dark:bg-dark-desaturated-blue dark:text-white dark:hover:bg-desaturated-blue`}>
      <div className="flex-row items-center mb-4">
        <img
          src={`/images/icon-${name.toLowerCase()}.svg`}
          alt={name}
          className="inline mr-2 w-6"
        />
        <span className="font-bold text-sm text-dark-grayish-blue">{username}</span>
      </div>
      <span className="font-bold text-6xl">{followers || subscribers}</span>
      <span className="text-dark-grayish-blue uppercase tracking-widest mb-4">{followers ? 'followers' : 'subscribers'}</span>
      <div className="flex-row items-center">
        <img
          src={isNegativeVariation(followersVariation || subscribersVariation) ? DownIcon : UpIcon}
          alt="Icon"
          className="inline mr-0.5"
        />
        <span className={`font-bold text-sm ${isNegativeVariation(followersVariation || subscribersVariation) ? 'text-red-600' : 'text-green-600'}`}>{replaceNegativeSign(followersVariation || subscribersVariation)} Today</span>
      </div>
    </div>
  )
}

export default SocialOverviewCard;
