import React, { useEffect, useRef, useState } from 'react';
import MainScreen from './components/mainscreen/MainScreen';
import DashboardScreen from './components/dashboardscreen/DashBoardScreen';
import gsap from 'gsap';
import ScrollElements from './components/scrollElements/scrollElements';
import './styles.css';
import './App.css'
import ContainerComponent from './components/container/containerComponent'
import FormSelector from './components/form-components/form-component';

function App() {
  const mainRef = useRef(null);
  const dashboardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && !hasAnimated) {
        // scroll down from MainScreen to Dashboard
        setHasAnimated(true);
        animateToDashboard();
      } else if (e.deltaY < 0 && hasAnimated) {
        // Scroll up in dashboard
        const dashboard = dashboardRef.current;
        if (dashboard.scrollTop === 0) {
          // scroll down while dashboard is at top -> animate back
          setHasAnimated(false);
          animateToMain();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [hasAnimated]);

  const animateToDashboard = () => {
    const tl = gsap.timeline();
    tl.to(mainRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }).to(dashboardRef.current, {
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, 0);
  };

  const animateToMain = () => {
    const tl = gsap.timeline();
    tl.to(dashboardRef.current, {
      y: '100%',
      duration: 1.5,
      ease: 'power3.inOut',
    }).to(mainRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.in',
    }, 0.5);
  };

  return (
  //   <div className="app-container">
  //     <div className="screen main-screen" ref={mainRef}>
  //       <MainScreen />
  //     </div>
  //     <div className="screen dashboard-screen" ref={dashboardRef}>
  //       <DashboardScreen />
  //     </div>
  //   </div>
  // );
    <>
    {/* <ContainerComponent /> */}
    <FormSelector />
    {/* <ScrollElements /> */}
    </>
  )
}

export default App;
