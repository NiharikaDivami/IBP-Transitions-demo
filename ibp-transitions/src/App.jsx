// import React, { useEffect, useRef, useState } from 'react';
// import MainScreen from './components/MainScreen';
// import DashboardScreen from './components/DashBoardScreen';
// import gsap from 'gsap';
// import './styles.css';

// function App() {
//   const mainRef = useRef(null);
//   const dashboardRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (e.deltaY > 0 && !hasAnimated) {
//         setHasAnimated(true);
//         animateTransition();
//       }
//     };

//     window.addEventListener('wheel', handleWheel);
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [hasAnimated]);

//   const animateTransition = () => {
//     const tl = gsap.timeline();
//     tl.to(mainRef.current, {
//       opacity: 0,
//       duration: 0.8,
//       ease: 'power2.out',
//     }).to(dashboardRef.current, {
//       y: 0,
//       duration: 1,
//       ease: 'power3.out',
//     }, 0); // start at same time
//   };

//   return (
//     <div className="container">
//       <div className="screen main" ref={mainRef}>
//         <MainScreen />
//       </div>
//       <div className="screen dashboard" ref={dashboardRef}>
//         <DashboardScreen />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useRef, useState } from 'react';
import MainScreen from './components/mainscreen/MainScreen';
import DashboardScreen from './components/dashboardscreen/DashBoardScreen';
import gsap from 'gsap';
import './styles.css';

function App() {
  const mainRef = useRef(null);
  const dashboardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && !hasAnimated) {
        setHasAnimated(true);
        animateTransition();
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [hasAnimated]);

  const animateTransition = () => {
    const tl = gsap.timeline();
    tl.to(mainRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }).to(dashboardRef.current, {
      y: 0,
      duration: 3,
      ease: 'power3.out',
    }, 0);
  };

  return (
    <div className="app-container">
      <div className="screen main-screen" ref={mainRef}>
        <MainScreen />
      </div>
      <div className="screen dashboard-screen" ref={dashboardRef}>
        <DashboardScreen />
      </div>
    </div>
  );
}

export default App;
