import { Container, ChallengeActive, ChallengeNotActive, Button } from './styles';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <Container>
      { hasActiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <Button 
              type="button" 
              name="failed"
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