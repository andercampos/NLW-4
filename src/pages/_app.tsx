import { AppProps } from 'next/app';

import GlobalStyle from '@styles/GlobalStyle';

import AppProvider from '@contexts/index';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <GlobalStyle />
    <Component {...pageProps} />
  </AppProvider>
);

export default MyApp;
