import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="clientNavbar" style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      textAlign: 'center',
      borderRadius: '.5em',
      overflow: 'hidden',
      marginBottom: '2em',
      gap: '.35em .25em'
    }}>
      <div
        className={`nav-button ${activeTab === 'Active Bots' ? 'active' : ''}`}
        onClick={() => handleTabClick('Active Bots')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Active Bots
      </div>
      <div
        className={`nav-button ${activeTab === 'Deactive Bots' ? 'active' : ''}`}
        onClick={() => handleTabClick('Deactive Bots')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Deactivate Bots
      </div>
      <div
        className={`nav-button ${activeTab === 'Training Data' ? 'active' : ''}`}
        onClick={() => handleTabClick('Training Data')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Training Data
      </div>
      <div
        className={`nav-button ${activeTab === 'Bot Analytics' ? 'active' : ''}`}
        onClick={() => handleTabClick('Bot Analytics')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Bot Analytics
      </div>
      <div
        className={`nav-button ${activeTab === 'Activity Logs' ? 'active' : ''}`}
        onClick={() => handleTabClick('Activity Logs')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Activity Logs
      </div>
      <div
        className={`nav-button ${activeTab === 'Settings' ? 'active' : ''}`}
        onClick={() => handleTabClick('Settings')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        Settings
      </div>
      <div
        className={`nav-button ${activeTab === 'User Feedback' ? 'active' : ''}`}
        onClick={() => handleTabClick('User Feedback')}
        style={{
          minWidth: '',
          flexGrow: '1',
          padding: '.75em',
          cursor: 'pointer',
          fontSize: '1.15em',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}
      >
        User Feedback
      </div>
    </div>
  );
};

Navbar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Navbar;
