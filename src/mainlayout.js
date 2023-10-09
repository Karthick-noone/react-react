import React from 'react';
import HeaderPage from './headermenu'; // Import your header component

function MainLayout({ children }) {
  return (
    <div>
      <HeaderPage />
      <div>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
