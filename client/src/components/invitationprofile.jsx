import React from 'react';
import InvitationCard from '../components/Profiledetaille.jsx'; // Assuming the component is in a file named InvitationCard.js

const YourComponent = () => {
  // Sample data for invitations
  const invitations = [
    {
      name: 'John Doe',
      imageUrl: 'https://example.com/john.jpg',
      id: 1 // You might have some unique identifier for each invitation
    },
    {
      name: 'Jane Smith',
      imageUrl: 'https://example.com/jane.jpg',
      id: 2
    },
    // Add more invitations as needed
  ];

  // Handlers for delete and accept actions
  const handleDelete = (id) => {
    console.log(`Invitation with ID ${id} deleted`);
    // Perform delete logic here
  };

  const handleAccept = (id) => {
    console.log(`Invitation with ID ${id} accepted`);
    // Perform accept logic here
  };

  return (
    <div>
      <h1>Invitations</h1>
      <div className="invitation-list">
        {invitations.map(invitation => (
          <InvitationCard
            key={invitation.id}
            name={invitation.name}
            imageUrl={invitation.imageUrl}
            onDelete={() => handleDelete(invitation.id)}
            onAccept={() => handleAccept(invitation.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
