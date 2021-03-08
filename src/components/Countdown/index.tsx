import { MdPlayArrow, MdClose, MdCheckCircle } from 'react-icons/md';

import { useCountdown } from '@contexts/CountdownContext';

import { Container, Button } from './styles';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    handleResetCountdown,
    handleStartCountdown,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button disabled>
          Ciclo encerrado
          <MdCheckCircle size={24} color="var(--green)" />
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button
              isActive={isActive}
              type="button"
              onClick={handleResetCountdown}
            >
              Abandonar ciclo
              <MdClose size={24} />
            </Button>
          ) : (
            <Button type="button" onClick={handleStartCountdown}>
              Iniciar um ciclo
              <MdPlayArrow size={24} />
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
