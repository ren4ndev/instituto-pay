import React from 'react';
import Header from '../../components/Header';
import FeaturedSection from '../../components/FeaturedSection';
import HomeSection from '../../components/HomeSection';
import WhoUsesSection from '../../components/WhoUsesSection';
import ReportsSection from '../../components/ReportsSection';
import DoubledSection from '../../components/DoubledSection';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <FeaturedSection />
      <HomeSection />
      <WhoUsesSection />
      <ReportsSection />
      <DoubledSection />
      <Footer />
    </>
  );
}

export default Home;
