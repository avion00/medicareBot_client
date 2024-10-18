import React, { useState } from 'react';
import {
  Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Button
} from '@mui/material';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const CustomizeGraph = ({ onBack, botData }) => {
  const [chartType, setChartType] = useState('LineChart');
  const [dataKey, setDataKey] = useState('responses');

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const handleDataKeyChange = (event) => {
    setDataKey(event.target.value);
  };

  return (
    <Card style={{ padding: '0 .5em' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom style={{
          padding: '.5em',
          fontSize: '1em',
          fontFamily: 'Inter, sans-serif',
        }}>
          Customize Your Graph
        </Typography>

        <FormControl fullWidth style={{ margin: '1em 0' }}>
          <InputLabel style={{
            marginTop: '-0.5em'
          }}>Chart Type</InputLabel>
          <Select value={chartType} onChange={handleChartTypeChange}>
            <MenuItem value="LineChart">Line Chart</MenuItem>
            <MenuItem value="BarChart">Bar Chart</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ margin: '1em 0' }}>
          <InputLabel style={{
            marginTop: '-0.5em'
          }}>Data Key</InputLabel>
          <Select value={dataKey} onChange={handleDataKeyChange}>
            <MenuItem value="responses">Responses</MenuItem>
            <MenuItem value="successRate">Success Rate</MenuItem>
          </Select>
        </FormControl>

        <ResponsiveContainer width="100%" height={300}>
          {chartType === 'LineChart' ? (
            <LineChart data={botData.performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          ) : (
            <BarChart data={botData.performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={dataKey} fill="#8884d8" />
            </BarChart>
          )}
        </ResponsiveContainer>

        <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={onBack}>
          Back to Dashboard
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomizeGraph;
