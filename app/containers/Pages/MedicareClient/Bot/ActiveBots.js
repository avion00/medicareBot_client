import React, { useEffect, useState } from 'react';
import botsData from './ActiveBotsData.json';
import './ActiveBots.css';

const ActiveBots = () => {
  const [bots, setBots] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setBots(botsData);
  }, []);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const handleDeactivate = (id) => {
    setBots((prevBots) => prevBots.map((bot) => (bot.id === id ? { ...bot, status: 'Inactive' } : bot))
    );
  };

  const BotCard = ({ bot }) => (
    <div className="bot-card" style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '.5em',
      boxShadow: '2px 2px 50px 5px rgb(125,125, 125, 0.15)',
      transition: 'all .3s ease-out',
      padding: '1em',
      border: '1px solid rgb(125, 125, 125, 0.3)'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        <img
          src={bot.selectedImage || 'https://via.placeholder.com/100'}
          alt="Bot Profile"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px sold rgb(125, 125, 125, 0.4)',
            margin: '1em'
          }}
        />
        <h3 className="bot-title" style={{
          fontSize: '1.5em',
          display: 'block',
          flexGrow: '1',
          padding: '.5em',
          fontWeight: '800',
          fontFamily: 'Inter, sans-serif',
          margin: '0',
        }}>{bot.name}</h3>
        <div className="bot-details" style={{
          flexGrow: '1',
          alignContent: 'start',
          padding: '.5em'
        }}>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}>
            <span style={{ fontWeight: '600' }}>Status: </span><span style={{ fontWeight: '800' }} className={`status ${bot.status.toLowerCase()}`}>{bot.status}</span>
          </p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Created On: </span><span>{bot.createdOn}</span></p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Last Trained: </span><span>{bot.lastTrained}</span></p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Usage Frequency: </span><span>{bot.usageFrequency}</span></p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Response Accuracy: </span><span>{bot.responseAccuracy}%</span></p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Support Languages: </span><span>{bot.supportLanguages.join(', ')}</span></p>
        </div>
        <div className="bot-metrics" style={{
          flexGrow: '1',
          alignContent: 'start',
          padding: '.5em'
        }}>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Performance Score: </span><span className="score">{bot.performanceScore}%</span></p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Response Time: </span><span>{bot.responseTime}s</span></p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Average Length: </span><span>{bot.averageSessionLength} mins</span></p>
          <p style={{
            fontSize: '1em',
            fontFamily: 'Inter',
            margin: '0',
          }}><span style={{ fontWeight: '600' }}>Total Interactions: </span><span>{bot.totalInteractions}</span></p>
        </div>
      </div>
      <div className="bot-actions" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
        padding: '.5em',
      }}>
        <button className="configure-btn" style={{
          padding: '.75em 1.5em',
          border: '1px solid rgb(125, 125, 125, 0.5)',
          fontSize: '.85em',
          borderRadius: '.25em',
          color: 'white',
        }}>Configure</button>
        <button className="train-btn" style={{
          padding: '.75em 1.5em',
          border: '1px solid rgb(125, 125, 125, 0.5)',
          fontSize: '.85em',
          borderRadius: '.25em',
          color: 'white',
        }}>Update Training Data</button>
        <button className="deactivate-btn" onClick={() => handleDeactivate(bot.id)} style={{
          padding: '.75em 1.5em',
          border: '1px solid rgb(125, 125, 125, 0.5)',
          fontSize: '.85em',
          borderRadius: '.25em',
          color: 'white',
        }}>
          Deactivate
        </button>
        <button className="view-analytics-btn" style={{
          padding: '.75em 1.5em',
          border: '1px solid rgb(125, 125, 125, 0.5)',
          fontSize: '.85em',
          borderRadius: '.25em',
          color: 'white',
        }}>View Analytics</button>
      </div>
    </div>
  );

  // Filter bots based on status
  const activeBots = bots.filter((bot) => bot.status === 'Active');

  // Limit to show only 2 active bots initially
  const displayedBots = showAll ? activeBots : activeBots.slice(0, 2);

  return (
    <section className="main active-bots container">
      <h2 style={{
        marginBottom: '1.5em',
        fontSize: '1.25em',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '800',
        backgroundColor: 'rgb(2, 3, 220, .5)',
        padding: '.75em 1em',
        borderRadius: '.5em',
      }}>Active Bots</h2>
      <div className="bot-list" style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '.75em',
        width: '100%',
        marginRight: '.5em',
        gap: '1.75em 1em'
      }}>
        {displayedBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
      {activeBots.length > 2 && !showAll && (
        <div className="view-all-container" style={{
          width: '98%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <button className="view-all-btn" onClick={handleViewAllClick} style={{
            padding: '1em 2em',
            fontSize: '.9em',
            margin: '1em',
            color: 'inherit'
          }}>
            View All
          </button>
        </div>
      )}
    </section>
  );
};

export default ActiveBots;
