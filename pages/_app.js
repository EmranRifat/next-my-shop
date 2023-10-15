import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AuthProvider from "./providers/AuthProvider";
import Header from "./Shared/header";
import Navbar from "./Shared/navbar";
import Footer from "./Shared/Footer";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // redux provider
  return (
    <AuthProvider>
    <Navbar/>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
      <Footer/>
    </AuthProvider>
  );
}
