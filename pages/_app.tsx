import { AppProps } from "next/app";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import store from "../store";
import { store, persistor } from "../store";
import Head from "next/head";
import "../style/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>ecommerse</title>
      </Head>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
