import Head from 'next/head';

import ExperienceBar from '@components/ExperienceBar';
import Profile from '@components/Profile';
import CompletedChallenges from '@components/CompletedChallenges';
import Countdown from '@components/Countdown';
import ChallengeBox from '@components/ChallengeBox';

import { CountdownProvider } from '@contexts/CountdownContext';

import { Container } from '@styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Início | move.it</title>
    </Head>

    <ExperienceBar />

    <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </CountdownProvider>
  </Container>
);

export default Home;
