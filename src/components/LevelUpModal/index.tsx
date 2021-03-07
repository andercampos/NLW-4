import { useChallenges } from '@contexts/ChallengesContext';

import { Overlay, Container } from './styles';

const LevelUpModal: React.FC = () => {
  const { level, handleCloseLevelUpModal } = useChallenges();

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={handleCloseLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
