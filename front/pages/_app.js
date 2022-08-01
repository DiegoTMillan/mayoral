import "../styles/globals.css";
import Context from "../components/Context";
import {useState} from "react";

function MyApp({ Component, pageProps }) {
  const [cardData, setCardData] = useState();

  return (
    <Context.Provider value={{ cardData, setCardData }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
