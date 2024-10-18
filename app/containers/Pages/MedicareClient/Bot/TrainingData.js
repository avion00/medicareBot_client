import React, { useState, useEffect } from 'react';
import trainingDataJson from './trainingData.json'; // Import the JSON file
import './style.css';

const TrainingData = () => {
  const [trainingData, setTrainingData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newIntent, setNewIntent] = useState('');
  const [newExample, setNewExample] = useState('');
  const [validationError, setValidationError] = useState(false); // For validation feedback

  // Load initial data from JSON file
  useEffect(() => {
    setTrainingData(trainingDataJson.trainingData);
  }, []);

  const handleAddNewData = () => {
    if (!newIntent || !newExample) {
      setValidationError(true);
      return; // Stop the function if validation fails
    }

    // Add new training data to the state
    setTrainingData([...trainingData, { intent: newIntent, example: newExample }]);
    // Close modal, reset input fields and validation error
    setIsModalOpen(false);
    setNewIntent('');
    setNewExample('');
    setValidationError(false);
  };

  const closeModal = () => {
    // Reset modal state when closing
    setIsModalOpen(false);
    setNewIntent('');
    setNewExample('');
    setValidationError(false);
  };

  return (
    <section className="main container training-data">
      <h2 style={{
        marginBottom: '1.5em',
        fontSize: '1.25em',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '800',
        backgroundColor: 'rgb(2, 3, 220, .5)',
        padding: '.75em 1em',
        borderRadius: '.5em',
      }}>
        Training Data
      </h2>
      <div className="training-box" style={{
        padding: '.75em'
      }}>
        <div className="training-container" style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '.75em',
          boxShadow: '2px 2px 50px 5px rgb(125,125, 125, 0.15)',
          transition: 'all .3s ease-out',
          border: '1px solid rgb(125, 125, 125, 0.3)'
        }}>
          <h3 style={{
            padding: '.7em 1.25em',
            backgroundColor: 'rgb(125, 125, 125, 0.25)',
            borderRadius: '.5em .5em 0 0',
            fontSize: '1.25em'
          }}>Available Training Data</h3>
          <ul className="training-list" style={{
            padding: '0 .5em'
          }}>
            {trainingData.map((data, index) => (
              <li key={index} style={{
                padding: '.75em',
                backgroundColor: 'rgb(105, 155, 245, 0.2)',
                borderRadius: '.5em',
                cursor: 'pointer',
                transition: 'all .3s ease-out',
                paddingBottom: '.5em',
                borderBottom: '1px solid rgb(125, 125, 125, 0.5)',
                borderLeft: '5px solid #007bff',
                marginBottom: '.5em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(105, 155, 245, 0.2)';
                e.currentTarget.style.color = 'inherit';
              }}
              >
                Intent: {data.intent} - Example: "{data.example}"
              </li>
            ))}
          </ul>
          <button
            className="add-training-data"
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: '.75em 1.5em',
              margin: ' 1em',
              width: 'fit-content',
              borderRadius: '.35em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#097df9be';
            }}>
            + Add New Training Data
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Training Data</h2>
            <label>
              Intent:
              <input
                type="text"
                value={newIntent}
                onChange={(e) => setNewIntent(e.target.value)}
                placeholder="Enter intent"
                className={validationError && !newIntent ? 'input-error' : ''}
              />
            </label>
            <label>
              Example:
              <input
                type="text"
                value={newExample}
                onChange={(e) => setNewExample(e.target.value)}
                placeholder="Enter example"
                className={validationError && !newExample ? 'input-error' : ''}
              />
            </label>

            {validationError && (
              <p className="error-message">Please fill out both fields.</p>
            )}

            <div className="modal-actions">
              <button onClick={handleAddNewData}>Add</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainingData;
