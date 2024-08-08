// App.tsx
import React from 'react';
import Servicecontent from '../components/servicecontent';
import Livechatpage from '../components/Livechatpage'
import Footer from '../components/Footer';
import OurTeamComponent from '../components/OurTeamComponent';

const Servicepage: React.FC = () => {
  return (
    <>
      <Servicecontent />
      <OurTeamComponent />
      <Livechatpage />
      <Footer />
    </>

  );
};

export default Servicepage;
