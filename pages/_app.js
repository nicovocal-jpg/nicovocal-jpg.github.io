import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import Meta from "@/components/Meta/Meta";
import { FONT_VARS } from "public/fonts";
import { LangProvider } from "utils/i18n";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <LangProvider>
      <Meta />
      <div className="font-sans" style={FONT_VARS}>
        <Component {...pageProps} />
      </div>
    </LangProvider>
  );
};

export default App;
