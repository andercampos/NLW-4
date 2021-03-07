import { useChallenges } from '@contexts/ChallengesContext';

import { Container, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <ProgressBar progress={percentToNextLevel} />

        <CurrentExperience progress={percentToNextLevel}>
          {currentExperience} xp
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};

export default ExperienceBar;
