import { ChallengesProvider } from '@contexts/ChallengesContext';

const AppProvider: React.FC = ({ children }) => (
  <ChallengesProvider>{children}</ChallengesProvider>
);

export default AppProvider;
