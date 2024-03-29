import React from 'react';
import { Card, CardActions, CardMedia, CardContent, Button, Typography, Box } from '@mui/material';

const InvitationCard = ({ invitation, onAccept, onDelete }) => {
  return (
    <Card sx={{ width: 300, mt: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={invitation.image}
        alt={invitation.name}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {invitation.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {invitation.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button size="small" color="primary" onClick={onAccept}>
            Accept
          </Button>
          <Button size="small" color="secondary" onClick={onDelete}>
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default InvitationCard;