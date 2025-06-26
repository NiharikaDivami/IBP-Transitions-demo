import React from 'react';
import './DashBoardScreen.css';

const DashboardScreen = () => {
  return (
    <div className="dashboard-inner">
      <h2>Dashboard</h2>
      <p>Welcome to your personal portal.</p>
      <div className="dashboard-scroll-content">
        {[...Array(80)].map((_, i) => (
          <p key={i}>Visible scroll content #{i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default DashboardScreen;
