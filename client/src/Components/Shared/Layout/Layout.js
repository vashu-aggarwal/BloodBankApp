import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  React.useEffect(() => {
    // Set body overflow to hidden
    document.body.style.overflow = 'hidden';
    return () => {
      // Clean up on unmount
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd',
        height: '60px', // Adjust as per your Header's height
      }}>
        <Header />
      </div>

      {/* Content area */}
      <div style={{
        display: 'flex',
        height: '100vh',
        marginTop: '60px', // Match the Header height
        overflow: 'hidden', // Prevent overflow in this container
      }}>
        {/* Sidebar */}
        <div style={{
          width: '21%',
          backgroundColor: '#f1f1f1',
          overflowY: 'auto', // Optional: Add scrolling if Sidebar content overflows
          height: 'calc(100vh - 60px)', // Subtract Header height
          borderRight: '1px solid #ddd',
        }}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div style={{
          width: '79%',
          overflowY: 'auto', // Make this section scrollable
          height: 'calc(100vh - 60px)', // Subtract Header height
          padding: '16px', // Optional padding for content
          backgroundColor: '#fff',
        }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
