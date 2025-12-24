import { Container, Row, Col } from 'react-bootstrap';
import { users } from '../data/users';
import UserCard from '../components/UserCard';

const UserListView = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Lista de Colaboradores</h1>
      <Row g={4}>
        {users.map((user) => (
          <Col key={user.id} xs={12} md={6} lg={4} className="mb-4">
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserListView;