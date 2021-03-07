import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useChallenges } from '@contexts/ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  handleStartCountdown(): void;
  handleResetCountdown(): void;
}

const CountdownContext = createContext<CountdownContextData>(
  {} as CountdownContextData,
);

let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC = ({ children }) => {
  const { handleStartNewChallenge } = useChallenges();

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleStartCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleResetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
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
      handleStartNewChallenge();
    }
  }, [isActive, time, handleStartNewChallenge]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        handleStartCountdown,
        handleResetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error('useCountdown must be used within an CountdownProvider');
  }

  return context;
}
