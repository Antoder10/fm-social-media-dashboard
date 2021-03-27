import React, {useState, useEffect} from 'react';

import followersOverview from './followersOverview.json';
import additionalData from './additionalData.json';

import Header from './components/Header';
import List from './components/List';

const App = () => {
  const [followersOverviewData, setFollowersOverviewData] = useState([]);
  const [additionalSocialData, setAdditionalSocialData] = useState([]);

  useEffect(() => {
    setFollowersOverviewData(followersOverview);
    setAdditionalSocialData(additionalData);
  }, []);

  const totalFollowers = followersOverviewData.reduce((acc, current) => acc + (parseInt(current.followers) || parseInt(current.subscribers)), 0);

  return (
    <div className="container sm:px-20 dark:bg-very-dark-blue-top">
      <Header totalFollowers={totalFollowers}/>
      <List followersOverviewData={followersOverviewData} />
      <h3 className="font-bold text-2xl text-dark-grayish-blue mb-8 mx-8 dark:text-white">Overview - Today</h3>
      <List additionalData={additionalSocialData} />
    </div>
  );
}

export default App;
