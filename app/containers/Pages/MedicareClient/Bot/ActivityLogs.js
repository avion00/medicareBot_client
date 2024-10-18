import React from 'react';
import Button from '@mui/material/Button';
import clientImage from './client.png';

const ActivityLogs = () => (
  <div className="activitylogs-container">
    <h1 style={{
      marginBottom: '1.5em',
      fontSize: '1.25em',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '800',
      backgroundColor: 'rgb(2, 3, 220, .5)',
      padding: '.75em 1em',
      borderRadius: '.5em',
    }}
    >Activity Logs</h1>
    <div style={{
      display: 'flex',
      width: '98%',
      overflow: 'auto',
      border: '1px solid rgb(125,125, 125, 0.2)',
      padding: '1em',
      margin: '0 .7em',
      borderRadius: '.5em',
      boxShadow: '2px 2px 50px 5px rgb(125, 125, 125, 0.15)'
    }}>
      <div style={{
        height: '500px',
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            style={{
              marginBottom: '.5em',
              padding: '.75em 1em',
              backgroundColor: 'rgba(0, 100, 250, .15)',
              display: 'flex',
              gap: '1em',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '.5em'
            }}
          >
            <div style={{
              display: 'block',
              width: '40px',
              height: '40px',
            }}>
              <img alt="Client" src={clientImage} style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}/>
            </div>
            <div style={{
              width: '100%',
              height: '38px',
              lineHeight: '1.25',
              overflow: 'hidden',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <span style={{
                fontSize: '1em',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
              }}>Primary text </span>
              <span style={{
                fontSize: '0.9em',
                fontFamily: 'Inter, sans-serif',
                padding: '0 .25em'
              }}>{' - '}This is seconary text loreaasdh ppor</span>
            </div>
            <div style={{
              width: '300px, !important',
              display: 'flex',
              alignItems: 'center',
              gap: '1em',
            }}>
              {'Date:' + new Date().toLocaleDateString()}
              <Button
                variant="contained"
                size="small"
                style={{
                  padding: '.35em 1.5em',
                  borderRadius: '.25em',
                  textTransform: 'capitalize',
                  backgroundColor: 'green'
                }}
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ActivityLogs;
