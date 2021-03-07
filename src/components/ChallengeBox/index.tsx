import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, ChallengeActive, ChallengeNotActive, Button } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, handleResetChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button 
              type="button" 
              name="failed"
              onClick={handleResetChallenge}
            >
              Falhei
            </Button>
            <Button 
              type="button" 
              name="succeeded"
            >
              Completei
            </Button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Avance de level completando desafios.
        </p>
      </ChallengeNotActive >
      )}
    </Container >
  );
};

export default ChallengeBox;