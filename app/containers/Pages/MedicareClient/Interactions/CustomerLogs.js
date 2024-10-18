import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const CustomerLogs = ({ customerLogs }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.125em'
      }}>
        Customer Logs
      </Typography>
      <List>
        {customerLogs.map((log, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${log.customer} - ${log.action}`}
              secondary={`Timestamp: ${new Date(log.timestamp).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default CustomerLogs;
