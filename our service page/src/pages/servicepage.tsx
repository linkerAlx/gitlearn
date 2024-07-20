// App.tsx
import React from 'react';
import Servicecontent from '../components/servicecontent';
import Livechatpage from '../components/Livechatpage'
import Footer from '../components/Footer';

const Servicepage: React.FC = () => {
  return (
    <>
    <Servicecontent /> 
    <Livechatpage/>
  <Footer/>
    </>
   
  );
};

export default Servicepage;
