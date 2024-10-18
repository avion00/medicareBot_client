import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import analyticsDataJson from './analyticsData.json';
import './style.css';

const BotAnalytics = () => {
  const [topQueries, setTopQueries] = useState([]);
  const performanceChartRef = useRef(null);

  // Function to draw performance chart using Chart.js
  const drawPerformanceChart = (data) => {
    const ctx = performanceChartRef.current.getContext('2d');
    const performanceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Performance Score',
          data: data.scores,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Score (%)',
            },
          },
        },
      },
    });

    // Return the chart instance if needed
    return performanceChart;
  };

  useEffect(() => {
    // Load data from JSON (simulating an API call)
    setTopQueries(analyticsDataJson.topQueries);

    // Only draw the chart if performance data is available
    if (analyticsDataJson.performanceData) {
      drawPerformanceChart(analyticsDataJson.performanceData);
    }
  }, []);

  return (
    <section className="analytics">
      <header>
        <h1 style={{
          marginBottom: '1.5em',
          fontSize: '1.25em',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '800',
          backgroundColor: 'rgb(2, 3, 220, .5)',
          padding: '.75em 1em',
          borderRadius: '.5em',
        }}>Bot Analytics</h1>
      </header>
      <div className="analytics-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
        alignItems: 'start',
        justifyContent: 'start',
        boxShadow: '2px 2px 50px 5px rgb(125, 125, 125, 0.15)',
        margin: '1em',
        borderRadius: '.5em',
        padding: '1em 0'
      }}>
        <div style={{
          flexGrow: '1',
          maxWidth: '750px',
          padding: '1em',
          borderRight: '1px solid rgb(125,125, 125, 0.3)'
        }}>
          <h3 style={{
            padding: '.75em 2em',
            fontFamily: 'Inter, sans-serif',
            fontSize: '.9em'
          }}>Performance Overview</h3>
          <canvas ref={performanceChartRef} style={{
            height: '360px',
            width: '100%',
            marginBottom: '1em'
          }}></canvas>
        </div>
        <div style={{
          padding: '1em',
          flexGrow: '1',
        }}>
          <h3 style={{
            padding: '.75em 2em',
            fontFamily: 'Inter, sans-serif',
            fontSize: '.9em'
          }}>Top User Queries</h3>
          <ul className="top-queries" style={{
            borderLeft: '.2em solid #00796b',
            borderRadius: '.25em',
            padding: '.25em 1em',
            marginTop: '2em'
          }}>
            {topQueries.map((query, index) => (
              <li key={index} style={{
                margin: '.5em .25em',
                padding: '.75em',
                borderRadius: '.5em',
                width: '100%',
                overflow: 'hidden',
              }}>"{query}"</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BotAnalytics;
