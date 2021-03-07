import GlobalStyle from '../styles/GlobalStyle';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChallengesProvider>
  );
};

export default MyApp;
