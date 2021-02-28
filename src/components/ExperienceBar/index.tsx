import { Container, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <ProgressBar progress='50%' />

        <CurrentExperience progress='50%'>300 xp</CurrentExperience>
      </div>
      <span>600 xp</span>
    </Container>
  )
}

export default ExperienceBar;