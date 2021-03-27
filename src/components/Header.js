import React from 'react';

import Toggle from './Toggle';

const Header = ({totalFollowers}) => {
  return (
    <header className="flex flex-col sm:flex-row mx-8 mb-4 pt-8 sm:items-center dark:text-white">
      <div className="flex flex-col border-b-2 border-gray-400 sm:border-0">
        <h1 className="font-bold text-3xl ">Social Media Dashboard</h1>
        <span className="font-bold text-sm text-dark-grayish-blue pb-4 sm:pb-0">Total Followers: {totalFollowers}</span>
      </div>
      <Toggle />
    </header>
  )
}

export default Header;