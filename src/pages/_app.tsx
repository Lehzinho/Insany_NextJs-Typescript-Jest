import Container from "@/components/container";
import Header from "@/components/header";
import ThemeProvider from "@/components/ThemeProvider";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}
