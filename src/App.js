import "./assets/styles/styles.scss";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Offers from "./components/Offers/Offers";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Offers />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
