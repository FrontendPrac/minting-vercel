import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { GlobalContextProvider } from "../context/GlobalContextProvider";
import { MetaMaskProvider } from "metamask-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import LoadingSplash from "../src/components/loading/LoadingSplash";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MetaMaskProvider>
        <GlobalContextProvider>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
            {/* !Google Fonts */}
            {/* Styles */}
            <link
              type="text/css"
              rel="stylesheet"
              href="/css/plugins.css?ver=4.1"
            />
            <link
              href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
              rel="stylesheet"
              type="text/css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <link
              href="https://fonts.cdnfonts.com/css/copperplate"
              rel="stylesheet"
            />
            <link
              type="text/css"
              rel="stylesheet"
              href="/css/style.css?ver=4.1"
            />
            {/* Favicon */}
            <link rel="icon" href="/favicon.png" />
          </Head>

          {isLoading ? (
            <LoadingSplash />
          ) : (
            <>
              <AnimatePresence>
                <Provider store={store}>
                  <Component {...pageProps} />
                </Provider>
              </AnimatePresence>
              <ToastContainer />
            </>
          )}
        </GlobalContextProvider>
      </MetaMaskProvider>
    </>
  );
}

export default MyApp;
