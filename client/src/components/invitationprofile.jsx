import React, { useState } from "react";
import {
  Card,
  Button,
  Badge,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";

import BootstrapSpinner from "react-bootstrap/Spinner";
// import ReactImg from "./placeholder-image.png";

const InvitationCard = ({ name, onDelete, onAccept }) => {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
      }}
    >
      <Card.Body>
        <Card.Title>
          {name}
          <Badge
            pill
            bg="danger"
            className="float-end"
            onClick={onDelete}
            style={{ cursor: "pointer" }}
          >
            X
          </Badge>
          <Badge
            pill
            bg="success"
            className="float-end"
            onClick={onAccept}
            style={{ cursor: "pointer" }}
          >
            Accept
          </Badge>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const App = () => {
  const [invitations, setInvitations] = useState([
    { id: 1, name: "Invitation 1" },
    { id: 2, name: "Invitation 2" },
    { id: 3, name: "Invitation 3" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
    setInvitations(invitations.filter((invitation) => invitation.id !== id));
  };

  const handleAccept = (id) => {
    // Add logic for accepting an invitation
  };

  const renderInvitations = () => {
    return invitations.map(({ id, name }) => {
      return (
        <Col key={id} className="mb-4" sm={6} md={4} lg={3}>
          <InvitationCard name={name} onDelete={() => handleDelete(id)} onAccept={() => handleAccept(id)} />
        </Col>
      );
    });
  };

  return (
    <>
      <Container fluid className="p-0 my-5" style={{ backgroundColor: "#000", color: "#fff" }}>
        <Container className="d-flex justify-content-center">
          <Row>{isLoading ? <BootstrapSpinner animation="border" variant="light" /> : renderInvitations()}</Row>
        </Container>
      </Container>
    </>
  );
};

export default App;