import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/responsive.css';
import WhatMakesUsSection from './components/WhatMakesUsSection';
import IntelligenceSection from './components/IntelligenceSection';
import StrategySection from './components/StrategySection';
import TechniqueSection from './components/TechniqueSection';
import LoginPage from './components/LoginPage';

// 懒加载各个section组件
const HeroSection = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const AdmissionsStatsSection = lazy(() => import('./components/AdmissionsStatsSection'));
const OffersSection = lazy(() => import('./components/OffersSection'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const Footer = lazy(() => import('./components/Footer'));

// 加载占位组件
const LoadingPlaceholder = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5',
    }}
  >
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <>
              <Suspense fallback={<LoadingPlaceholder />}>
                <HeroSection />
              </Suspense>
              <Suspense fallback={<LoadingPlaceholder />}>
                <AboutSection />
              </Suspense>
              <WhatMakesUsSection />
              <IntelligenceSection />
              <StrategySection />
              <TechniqueSection />
              <Suspense fallback={<LoadingPlaceholder />}>
                <AdmissionsStatsSection />
              </Suspense>
              <Suspense fallback={<LoadingPlaceholder />}>
                <ServicesSection />
              </Suspense>
              <Suspense fallback={<LoadingPlaceholder />}>
                <OffersSection />
              </Suspense>
              <Suspense fallback={<LoadingPlaceholder />}>
                <TeamSection />
              </Suspense>
              <Suspense fallback={<LoadingPlaceholder />}>
                <FAQSection />
              </Suspense>
              <Suspense fallback={<LoadingPlaceholder />}>
                <Footer />
              </Suspense>
            </>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App; 
