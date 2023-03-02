import globals from "@/src/common/styles/global";
import theme from "@/src/common/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
