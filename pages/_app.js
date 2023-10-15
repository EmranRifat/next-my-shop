import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AuthProvider from "./providers/AuthProvider";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // redux provider
  return (
    <AuthProvider>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </AuthProvider>
  );
}
