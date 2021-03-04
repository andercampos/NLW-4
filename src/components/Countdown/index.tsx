import { useState, useEffect, useCallback } from 'react';
import { MdPlayArrow, MdClose, MdCheckCircle } from 'react-icons/md'

import { Container, Button } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  const handleStartCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleResetountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

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

      { hasFinished ? (
        <Button
          disabled
        >
          Ciclo encerrado
          <MdCheckCircle size={24} color={'var(--green)'} />
        </Button>
      ) : (
          <>
            { isActive ? (
              <Button isActive={isActive} type="button" onClick={handleResetountdown}>
                Abandonar ciclo
                <MdClose size={24} />
              </Button>
            ) : (
              <Button type="button" onClick={handleStartCountdown}>
                  Iniciar um ciclo
                  <MdPlayArrow size={24}/>
                </Button>
              )}
          </>
        )}
    </>
  );
};

export default Countdown;