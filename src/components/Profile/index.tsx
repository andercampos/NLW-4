import { useChallenges } from '@contexts/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useChallenges();

  return (
    <Container>
      <img src="https://github.com/andercampos.png" alt="Anderson Campos" />
      <div>
        <strong>Anderson Campos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
