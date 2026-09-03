import Footer from "@/Layout/Footer";
// import HeaderSection from "@/Layout/Header";
import Header from "@/Layout/Header";
// import "@/styles/globals.css";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>

      <main>
        <Component {...pageProps} />
      </main>
<Footer/>
      
    </>
  );
}