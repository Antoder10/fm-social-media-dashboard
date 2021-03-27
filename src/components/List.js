import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import SocialOverviewCard from './SocialOverviewCard';
import AdditionalDataCard from './AdditionalDataCard';

const SocialOverviewList = ({followersOverviewData, additionalData}) => {

  return (
    <section className="py-8 mx-8 flex flex-col sm:grid sm:grid-cols-4 sm:gap-8">
      {
        followersOverviewData
          ? followersOverviewData.map(socialData => <SocialOverviewCard socialData={socialData} key={uuidv4()}/>)
          : additionalData.map(additionalData => <AdditionalDataCard additionalData={additionalData} key={uuidv4()}/>)
      }
    </section>
  )
}

export default SocialOverviewList;