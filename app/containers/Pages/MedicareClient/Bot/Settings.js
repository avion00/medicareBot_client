import React, { useState } from 'react';
import './style.css'; // Import your CSS file for additional styles

const Settings = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [backupStatus, setBackupStatus] = useState('');
  const [restoreStatus, setRestoreStatus] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  const handleSaveSettings = () => {
    alert(`API URL saved: ${apiUrl}`);
  };

  const handleSaveNotifications = () => {
    alert(`Notifications saved:\nEmail: ${emailNotifications ? 'On' : 'Off'}\nSMS: ${smsNotifications ? 'On' : 'Off'}`);
  };

  const handleBackupData = () => {
    setBackupStatus('Backup successful.');
    setTimeout(() => setBackupStatus(''), 3000); // Clear message after 3 seconds
  };

  const handleRestoreData = () => {
    // Simulating data restoration
    setRestoreStatus('Data restored.');
    setTimeout(() => setRestoreStatus(''), 3000); // Clear message after 3 seconds
  };

  const handleDeleteData = () => {
    // Simulating delete all data logic
    if (window.confirm('Are you sure you want to delete all data? This action cannot be undone.')) {
      setDeleteStatus('All data deleted.');
      setTimeout(() => setDeleteStatus(''), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <section className="settings">
      <header>
        <h1 style={{
          marginBottom: '1.5em',
          fontSize: '1.25em',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '800',
          backgroundColor: 'rgb(2, 3, 220, .5)',
          padding: '.75em 1em',
          borderRadius: '.5em',
        }}>Settings</h1>
      </header>
      <div className="settings-container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5em',
        padding: '1em'
      }}>
        <div className="settings-section" style={{
          display: 'flex',
          flexDirection: 'column',
          // gap: '1em',
        }}>
          <h3 style={{
            fontSize: '1em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '800'
          }}>General Settings</h3>
          <label htmlFor="api-url" style={{
            fontSize: '.75em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '800',
            marginLeft: '1em'
          }}>API URL:</label>
          <input
            className='api_url_input'
            type="text"
            id="api-url"
            placeholder="Enter API URL"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            style={{
              padding: '.75em 1em',
              backgroundColor: 'inherit',
              color: 'inherit',
              borderRadius: '.35em',
              fontFamily: 'Inter, sans-serif',
              fontSize: '.9em'
            }}
          />
          <button className="save-settings" onClick={handleSaveSettings} style={{
            padding: '.75em 1.5em',
            width: 'fit-content',
            marginBottom: '2.5em',
            fontSize: '.9em',
            marginTop: '.5em',
          }}>
            Save Settings
          </button>
        </div>

        <div className="settings-section" style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{
            fontSize: '1em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '800',
          }}>Notification Preferences</h3>
          <label htmlFor="email-notifications" className="notification-label"
            style={{
              fontSize: '1em',
              fontFamily: 'Inter, sans-serif',
              marginLeft: '1em',
              cursor: 'pointer',
            }}>
            <input
              type="checkbox"
              id="email-notifications"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            Email Notifications
          </label>
          <label htmlFor="sms-notifications" className="notification-label"
            style={{
              fontSize: '1em',
              fontFamily: 'Inter, sans-serif',
              marginLeft: '1em',
              cursor: 'pointer',
            }}>
            <input
              type="checkbox"
              id="sms-notifications"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
            />
            SMS Notifications
          </label>
          <button className="save-notifications" onClick={handleSaveNotifications}
            style={{
              padding: '.75em 1.5em',
              width: 'fit-content',
              fontSize: '.9em',
              margin: '.5em 0',
              marginBottom: '2.5em'
            }}>
            Save Notification Preferences
          </button>
        </div>

        <div className="settings-section">
          <h3 style={{
            fontSize: '1em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '800'
          }}>Data Management</h3>
          <div style={{
            display: 'flex',
            gap: '1em',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <button className="data-action" onClick={handleBackupData}
              style={{
                padding: '.75em 1.5em',
                width: 'fit-content',
                fontSize: '.9em',
                margin: '.5em 0',
              }}>
              Backup Data
            </button>
            {backupStatus && <p className="status-message">{backupStatus}</p>}

            <button className="data-action" onClick={handleRestoreData}
              style={{
                padding: '.75em 1.5em',
                width: 'fit-content',
                fontSize: '.9em',
                margin: '.5em 0',
              }}>
              Restore Data
            </button>
            {restoreStatus && <p className="status-message">{restoreStatus}</p>}

            <button className="data-action delete-data" onClick={handleDeleteData}
              style={{
                padding: '.75em 1.5em',
                width: 'fit-content',
                fontSize: '.9em',
                margin: '.5em 0',
              }}
            >
              Delete All Data
            </button>
            {deleteStatus && <p className="status-message delete">{deleteStatus}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
