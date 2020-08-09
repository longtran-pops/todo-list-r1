import { ApolloProvider } from '@apollo/client';

import { withApollo } from '../lib/apollo';
import Layout from '../components/Layout.Component';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { ...pageProps };
};

export default withApollo(MyApp);
