import React, { useState } from 'react';
import feedbackData from './feedbackData.json'; // Import JSON data
import './style.css';

const UserFeedback = () => {
  const [showAllFeedback, setShowAllFeedback] = useState(false);

  const handleViewAllFeedback = () => {
    setShowAllFeedback(!showAllFeedback);
  };

  return (
    <section className="feedback">
      <header>
        <h1 style={{
          marginBottom: '1.5em',
          fontSize: '1.25em',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '800',
          backgroundColor: 'rgb(2, 3, 220, .5)',
          padding: '.75em 1em',
          borderRadius: '.5em',
        }}>User Feedback</h1>
      </header>
      <div className="feedback-container" style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h3 style={{
          fontSize: '1em',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '800',
          marginLeft: '1em'
        }}>Recent Feedback</h3>
        <ul className="feedback-list">
          {feedbackData.recentFeedback.map((feedback, index) => (
            <li key={index} style={{
              margin: '.5em 1em',
              padding: '10px',
              border: '1px solid rgb(125,125, 125, 0.3)',
              borderRadius: '.5em',
              borderLeft: '.3em solid rgb(0, 120, 220, 0.75)'
            }}>"{feedback.text}" - {feedback.user}</li>
          ))}
        </ul>

        {showAllFeedback && (
          <ul className="feedback-list">
            {feedbackData.allFeedback.map((feedback, index) => (
              <li key={index} style={{
                margin: '.5em 1em',
                padding: '10px',
                border: '1px solid rgb(125,125, 125, 0.3)',
                borderRadius: '.5em',
                borderLeft: '.3em solid rgb(0, 120, 220, 0.75)'
              }}>"{feedback.text}" - {feedback.user}</li>
            ))}
          </ul>
        )}

        <button onClick={handleViewAllFeedback} style={{
          padding: '.75em 1.5em',
          width: 'fit-content',
          margin: '1em 0',
          marginLeft: '1em',
          fontSize: '.9em',

        }}>
          {showAllFeedback ? 'Hide Feedback' : 'View All Feedback'}
        </button>
      </div>
    </section>
  );
};

export default UserFeedback;
