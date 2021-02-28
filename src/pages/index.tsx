import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </Container>
  );
};

export default Home;