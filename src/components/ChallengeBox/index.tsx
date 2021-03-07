import { useChallenges } from '@contexts/ChallengesContext';
import { useCountdown } from '@contexts/CountdownContext';
import { useCallback } from 'react';

import {
  Container,
  ChallengeActive,
  ChallengeNotActive,
  Button,
} from './styles';

const ChallengeBox: React.FC = () => {
  const {
    activeChallenge,
    handleResetChallenge,
    handleCompleteChallenge,
  } = useChallenges();
  const { handleResetCountdown } = useCountdown();

  const handleChallengeSucceeded = useCallback(() => {
    handleCompleteChallenge();
    handleResetCountdown();
  }, [handleCompleteChallenge, handleResetCountdown]);

  const handleChallengeFailed = useCallback(() => {
    handleResetChallenge();
    handleResetCountdown();
  }, [handleResetChallenge, handleResetCountdown]);

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt={activeChallenge.type}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button type="button" name="failed" onClick={handleChallengeFailed}>
              Falhei
            </Button>
            <Button
              type="button"
              name="succeeded"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </Button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
