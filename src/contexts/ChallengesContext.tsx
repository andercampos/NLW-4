import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import challenges from '../../challenges.json';

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  handleLevelUp(): void;
  handleStartNewChallenge(): void;
  handleResetChallenge(): void;
  handleCompleteChallenge(): void;
}

const ChallengesContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData,
);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null,
  );

  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const handleLevelUp = useCallback((): void => {
    setLevel(level + 1);
  }, [level]);

  const handleStartNewChallenge = useCallback((): void => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp`,
      });
    }
  }, []);

  const handleResetChallenge = useCallback((): void => {
    setActiveChallenge(null);
  }, []);

  const handleCompleteChallenge = useCallback((): void => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    handleLevelUp,
  ]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        handleLevelUp,
        handleStartNewChallenge,
        handleResetChallenge,
        handleCompleteChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext);

  if (!context) {
    throw new Error('useChallenges must be used within a ChallengerProvider');
  }

  return context;
}
