import InvitationCard from '../components/Profiledetaille.jsx';

const invitationList = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Hey, I would like to invite you to my party!',
    image: 'https://via.placeholder.com/150',
  },
  // other invitations
];

const ParentComponent = () => {
  const handleAccept = (id) => {
    // handle acceptance logic here
  };

  const handleDelete = (id) => {
    // handle deletion logic here
  };

  return (
    <div>
      {invitationList.map((invitation) => (
        <InvitationCard
          key={invitation.id}
          invitation={invitation}
          onAccept={() => handleAccept(invitation.id)}
          onDelete={() => handleDelete(invitation.id)}
        />
      ))}
    </div>
  );
};

export default ParentComponent;