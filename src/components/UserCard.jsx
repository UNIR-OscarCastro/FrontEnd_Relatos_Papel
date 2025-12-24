import { Card, Button } from 'react-bootstrap';

const UserCard = ({ user }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>{user.bio}</Card.Text>
        <Button variant="outline-primary" className="mt-auto">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;