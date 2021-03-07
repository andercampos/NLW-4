import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ExperienceBar from '@components/ExperienceBar';
import Profile from '@components/Profile';
import CompletedChallenges from '@components/CompletedChallenges';
import Countdown from '@components/Countdown';
import ChallengeBox from '@components/ChallengeBox';

import { ChallengesProvider } from '@contexts/ChallengesContext';
import { CountdownProvider } from '@contexts/CountdownContext';

import { Container } from '@styles/pages/Home';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC<HomeProps> = ({
  level,
  currentExperience,
  challengesCompleted,
}) => (
  <ChallengesProvider
    level={level}
    currentExperience={currentExperience}
    challengesCompleted={challengesCompleted}
  >
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
  </ChallengesProvider>
);

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

export default Home;
