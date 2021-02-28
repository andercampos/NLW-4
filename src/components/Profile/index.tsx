import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/andercampos.png" alt="Anderson Campos" />
      <div>
        <strong>Anderson Campos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;