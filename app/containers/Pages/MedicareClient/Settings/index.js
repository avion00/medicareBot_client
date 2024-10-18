import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import './style.css';

function MedicareClientSettings(props) {
  const title = `${brand.name} - Medicare Client Settings`;
  const description = brand.desc;
  const { intl } = props;

  const [configResponse, setConfigResponse] = useState('');
  const [crawlingStatus, setCrawlingStatus] = useState('');
  const [analyticsData, setAnalyticsData] = useState('');
  const [feedbackList, setFeedbackList] = useState('');
  const [activityLogs, setActivityLogs] = useState('');
  const [advancedSettings, setAdvancedSettings] = useState({
    responseTime: '',
    supportedLanguages: []
  });
  const [crawlSettings, setCrawlSettings] = useState({
    depth: '',
    includeSitemap: false
  });
  const [botAppearance, setBotAppearance] = useState({
    colorScheme: '',
    fontStyle: ''
  });
  const [feedback, setFeedback] = useState('');

  // Event Handlers
  const configureBots = () => {
    // Handle bot configuration
  };

  const startCrawling = () => {
    // Handle website crawling
  };

  const customizeBot = () => {
    // Handle bot customization
  };

  const generateCode = () => {
    // Handle code generation
  };

  const fetchAnalytics = () => {
    // Fetch analytics
  };

  const fetchFeedback = () => {
    // Fetch user feedback
  };

  const fetchLogs = () => {
    // Fetch activity logs
  };

  const saveCrawlingSettings = () => {
    // Save crawling settings
  };

  const submitFeedback = () => {
    // Handle feedback submission
  };

  const exportAnalytics = () => {
    // Export analytics data
  };

  const exportLogs = () => {
    // Export activity logs
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdvancedSettings((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCrawlSettingChange = (e) => {
    const {
      name,
      value,
      checked,
      type
    } = e.target;
    setCrawlSettings((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBotAppearanceChange = (e) => {
    const { name, value } = e.target;
    setBotAppearance((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFeedbackInput = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div
        className="main container bot_settings"
        style={{
        }}>
        {/* Configure Bots */}
        <section style={{
          padding: '1em',
          border: '1px solid rgb(125, 125, 125, 0.1)',
          borderRadius: '.5em',
          boxShadow: '2px 2px 20px 5px rgb(125, 125, 125, 0.15)'
        }}>
          <h3
            style={{
              marginBottom: '1.5em',
              fontSize: '1.25em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              backgroundColor: 'rgb(2, 3, 220, .5)',
              padding: '.75em 1em',
              borderRadius: '.5em',
            }}>Configure Bots</h3>
          <label style={{
            padding: '.5em',
            fontWeight: '600',
            fontSize: '1.125em'
          }}>Select Channels:</label>
          <select className='select_channels' multiple style={{
            width: '98%',
            padding: '0',
            margin: ' .5em',
            backgroundColor: 'rgb(125, 125, 125, 0.15)',
            color: 'inherit',
            overflow: 'auto',
            borderRadius: '.25em',
          }}>
            <option style={{
              padding: '.5em 1em',
              borderBottom: '5px solid rgb(125, 125, 125, 0.5)',
              fontFamily: 'Inter, sans-serif',
            }}>Webchat</option>
            <option style={{
              padding: '.5em 1em',
              borderBottom: '5px solid rgb(125, 125, 125, 0.5)',
              fontFamily: 'Inter, sans-serif',
            }}>Email</option>
            <option style={{
              padding: '.5em 1em',
              borderBottom: '5px solid rgb(125, 125, 125, 0.5)',
              fontFamily: 'Inter, sans-serif',
            }}>WhatsApp</option>
            <option style={{
              padding: '.5em 1em',
              borderBottom: '5px solid rgb(125, 125, 125, 0.5)',
              fontFamily: 'Inter, sans-serif',
            }}>Messenger</option>
            <option style={{
              padding: '.5em 1em',
              fontFamily: 'Inter, sans-serif',
            }}>Telegram</option>
          </select>
          <button
            style={{
              padding: '.65em 1.25em',
              margin: '.25em 1.25em',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none'
            }}
            onClick={configureBots}
          >
            Configure Bots
          </button>
          <p>{configResponse}</p>

          <h4 style={{
            marginTop: '1.5em',
            padding: ' 0 .5em',
            fontWeight: '600',
            fontSize: '1.1em',
          }}>Advanced Bot Settings</h4>
          <label style={{
            padding: '.15em 1em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600'
          }}>Response Time (ms):</label>
          <input
            type="number"
            name="responseTime"
            value={advancedSettings.responseTime}
            onChange={handleInputChange}
            style={{
              width: '96%',
              padding: '.25em 1em',
              fontFamily: 'Inter, sans-serif',
              margin: '0 0 .75em 1em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              borderRadius: '.25em',
              border: '1px solid rgb(125, 125, 125, 0.5)'
            }}
          />
          <label style={{
            marginTop: '1.5em',
            marginLeft: '.5em',
            padding: ' 0 .5em',
            fontWeight: '600',
            fontSize: '1.1em',
          }}>Supported Languages:</label>
          <input
            type="text"
            name="supportedLanguages"
            value={advancedSettings.supportedLanguages}
            onChange={handleInputChange}
            placeholder="Comma separated"
            style={{
              width: '96%',
              padding: '.25em 1em',
              fontFamily: 'Inter, sans-serif',
              margin: '0 0 .75em 1em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              borderRadius: '.25em',
              border: '1px solid rgb(125, 125, 125, 0.5)',
            }}
          />
        </section>

        {/* Website Crawling */}
        <section style={{
          marginTop: '1.5em',
          padding: '1em',
          border: '1px solid rgb(125, 125, 125, 0.1)',
          borderRadius: '.5em',
          boxShadow: '2px 2px 20px 5px rgb(125, 125, 125, 0.15)'
        }}>
          <h3
            style={{
              marginBottom: '1.5em',
              fontSize: '1.25em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              backgroundColor: 'rgb(2, 3, 220, .5)',
              padding: '.75em 1em',
              borderRadius: '.5em',
            }}>Website Crawling</h3>
          <input
            type="text"
            placeholder="Enter website URL"
            style={{
              width: '99%',
              padding: '.5em 1em',
              margin: ' .75em 0 1em .25em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              borderRadius: '.25em',
              border: '1px solid rgb(125, 125, 125, 0.5)'
            }}
          />
          <label style={{
            marginTop: '1.5em',
            padding: ' 0 .5em',
            fontWeight: '600',
            fontSize: '1.1em',
          }}>Crawl Depth:</label>
          <input
            type="number"
            name="depth"
            value={crawlSettings.depth}
            onChange={handleCrawlSettingChange}
            style={{
              width: '99%',
              padding: '.5em 1em',
              margin: '0 0 1.5em .25em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              borderRadius: '.25em',
              border: '1px solid rgb(125, 125, 125, 0.5)'
            }}
          />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexWrap: 'wrap',
            gap: '1em'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5em',
              fontFamily: 'Inter, sans-serif',
            }}>
              <input
                type="checkbox"
                name="includeSitemap"
                checked={crawlSettings.includeSitemap}
                onChange={handleCrawlSettingChange}
                style={{
                  margin: '0 0 0 .5em',
                  border: '1px solid rgb(125, 125, 125, 0.5)'
                }}
              />{' '}
              Include Sitemap
            </label>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none'
              }}
              onClick={startCrawling}
            >
              Start Crawling
            </button>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                marginLeft: '10px'
              }}
              onClick={saveCrawlingSettings}
            >
              Save Crawling Settings
            </button>
            <p>{crawlingStatus}</p>
          </div>
        </section>

        {/* Bot Customization */}
        <section style={{
          marginTop: '1.5em',
          padding: '1em',
          border: '1px solid rgb(125, 125, 125, 0.1)',
          borderRadius: '.5em',
          boxShadow: '2px 2px 20px 5px rgb(125, 125, 125, 0.15)'
        }}>
          <h3
            style={{
              marginBottom: '1.5em',
              fontSize: '1.25em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              backgroundColor: 'rgb(2, 3, 220, .5)',
              padding: '.75em 1em',
              borderRadius: '.5em',
            }}>Bot Customization</h3>
          <label style={{
            marginTop: '1.5em',
            padding: ' 0 .5em',
            fontWeight: '600',
            fontSize: '1.1em',
          }}>Avatar:</label>
          <input type="file" style={{
            width: '99%',
            padding: '.5em 1em',
            margin: ' .75em 0 1em .5em',
            backgroundColor: 'rgb(125, 125, 125, 0.15)',
            color: 'inherit',
            borderRadius: '.25em',
            border: '1px solid rgb(125, 125, 125, 0.5)'
          }} />
          <label style={{
            marginTop: '1.5em',
            padding: ' 0 .5em',
            fontWeight: '600',
            fontSize: '1.1em',
          }}>Icon:</label>
          <input type="file" style={{
            width: '99%',
            padding: '.5em 1em',
            margin: ' .75em 0 1em .5em',
            backgroundColor: 'rgb(125, 125, 125, 0.15)',
            color: 'inherit',
            borderRadius: '.25em',
            border: '1px solid rgb(125, 125, 125, 0.5)'
          }} />
          <label style={{
            marginTop: '1.5em',
            padding: ' 0 .5em',
            fontWeight: '600',
            fontSize: '1.1em',
          }}>Color Scheme:</label>
          <input
            type="text"
            name="colorScheme"
            value={botAppearance.colorScheme}
            onChange={handleBotAppearanceChange}
            placeholder="e.g., #ff0000"
            style={{
              width: '99%',
              padding: '.5em 1em',
              margin: ' .75em 0 1em .5em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              borderRadius: '.25em',
              border: '1px solid rgb(125, 125, 125, 0.5)'
            }}
          />
          <label style={{
            marginTop: '1.5em',
            padding: ' 0 .5em',
            fontWeight: '600',
            fontSize: '1.1em',
          }}>Font Style:</label>
          <input
            type="text"
            name="fontStyle"
            value={botAppearance.fontStyle}
            onChange={handleBotAppearanceChange}
            placeholder="e.g., Arial"
            style={{
              width: '99%',
              padding: '.5em 1em',
              margin: ' .75em 0 1em .5em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              borderRadius: '.25em',
              border: '1px solid rgb(125, 125, 125, 0.5)'
            }}
          />
          <button
            style={{
              padding: '.65em 1.25em',
              margin: '.5em .7em',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none'
            }}
            onClick={customizeBot}
          >
            Customize Bot
          </button>
        </section>

        {/* Code Integration */}
        <section style={{
          marginTop: '1.5em',
          padding: '1em',
          border: '1px solid rgb(125, 125, 125, 0.1)',
          borderRadius: '.5em',
          boxShadow: '2px 2px 20px 5px rgb(125, 125, 125, 0.15)'
        }}>
          <h3
            style={{
              marginBottom: '1.5em',
              fontSize: '1.25em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              backgroundColor: 'rgb(2, 3, 220, .5)',
              padding: '.75em 1em',
              borderRadius: '.5em',
            }}>Code Integration</h3>
          <input
            type="text"
            placeholder="Enter custom platform (e.g., WordPress)"
            style={{
              width: '99%',
              padding: '.5em 1em',
              margin: ' .75em 0 1em .5em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              borderRadius: '.25em',
              border: '1px solid rgb(125, 125, 125, 0.5)'
            }}
          />
          <button
            style={{
              padding: '0.65em 1em',
              margin: '.7em',
              backgroundColor: '#ffc107',
              color: 'black',
              border: 'none'
            }}
            onClick={generateCode}
          >
            Generate Code Snippet
          </button>
        </section>

        {/* Bot Analytics */}
        <section style={{
          marginTop: '1.5em',
          padding: '1em',
          border: '1px solid rgb(125, 125, 125, 0.1)',
          borderRadius: '.5em',
          boxShadow: '2px 2px 20px 5px rgb(125, 125, 125, 0.15)'
        }}>
          <h3
            style={{
              marginBottom: '1.5em',
              fontSize: '1.25em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              backgroundColor: 'rgb(2, 3, 220, .5)',
              padding: '.75em 1em',
              borderRadius: '.5em',
            }}>Bot Analytics</h3>
          <button
            style={{
              padding: '.6em 1em',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none'
            }}
            onClick={fetchAnalytics}
          >
            Fetch Analytics
          </button>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#ffc107',
              color: 'black',
              border: 'none',
              marginLeft: '10px'
            }}
            onClick={exportAnalytics}
          >
            Export Analytics
          </button>
          <p>{analyticsData}</p>
        </section>

        {/* User Feedback */}
        <section style={{
          marginTop: '1.5em',
          padding: '1em',
          border: '1px solid rgb(125, 125, 125, 0.1)',
          borderRadius: '.5em',
          boxShadow: '2px 2px 20px 5px rgb(125, 125, 125, 0.15)'
        }}>
          <h3
            style={{
              marginBottom: '1.5em',
              fontSize: '1.25em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              backgroundColor: 'rgb(2, 3, 220, .5)',
              padding: '.75em 1em',
              borderRadius: '.5em',
            }}>User Feedback</h3>
          <textarea
            value={feedback}
            onChange={handleFeedbackInput}
            placeholder="Enter feedback"
            style={{
              width: '99%',
              padding: '1em',
              marginBottom: '10px',
              borderRadius: '.25em',
              backgroundColor: 'rgb(125, 125, 125, 0.15)',
              color: 'inherit',
              border: '1px solid rgb(125, 125, 125, 0.5)'
            }}
          ></textarea>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none'
            }}
            onClick={submitFeedback}
          >
            Submit Feedback
          </button>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              marginLeft: '10px'
            }}
            onClick={fetchFeedback}
          >
            Fetch Feedback
          </button>
          <p>{feedbackList}</p>
        </section>

        {/* Activity Logs */}
        <section style={{
          marginTop: '1.5em',
          padding: '1em',
          border: '1px solid rgb(125, 125, 125, 0.1)',
          borderRadius: '.5em',
          boxShadow: '2px 2px 20px 5px rgb(125, 125, 125, 0.15)'
        }}>
          <h3
            style={{
              marginBottom: '1.5em',
              fontSize: '1.25em',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              backgroundColor: 'rgb(2, 3, 220, .5)',
              padding: '.75em 1em',
              borderRadius: '.5em',
            }}>Activity Logs</h3>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none'
            }}
            onClick={fetchLogs}
          >
            Fetch Logs
          </button>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#ffc107',
              color: 'black',
              border: 'none',
              marginLeft: '10px'
            }}
            onClick={exportLogs}
          >
            Export Logs
          </button>
          <p>{activityLogs}</p>
        </section>
      </div>
    </div>
  );
}

MedicareClientSettings.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(MedicareClientSettings);
