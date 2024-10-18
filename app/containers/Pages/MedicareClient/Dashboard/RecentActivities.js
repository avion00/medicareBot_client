import React from 'react';
import {
  Card, CardContent, Typography, List, ListItem, ListItemText
} from '@mui/material';

const RecentActivities = ({ activities }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom style={{
        padding: '.25em 1em',
        fontSize: '.9em',
        fontWeight: '800',
        fontFamily: 'Inter, sans-serif'
      }}>
        Recent Activities
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={activity.description}
              secondary={activity.time}
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default RecentActivities;
