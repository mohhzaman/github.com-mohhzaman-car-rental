import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/sections/Categories';
import HowItWorks from './components/sections/HowItWorks';
import FeaturedCars from './components/sections/FeaturedCars';
import WhyChooseUs from './components/sections/WhyChooseUs';
import SafetyMeasures from './components/sections/SafetyMeasures';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import HostPromo from './components/sections/HostPromo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <FeaturedCars />
        <WhyChooseUs />
        <SafetyMeasures />
        <Testimonials />
        <FAQ />
        <HostPromo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
