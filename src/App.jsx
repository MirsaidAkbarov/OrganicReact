import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import BannerExplore from "./components/bannerExplore";
import BannerFreshFruit from "./components/bannerFreshFruit";
import BannerFarm from "./components/bannerFarmers";
import BannerProducts from "./components/bannerProducts";
import BannerReplice from "./components/bannerReplice";
import BannerOffer from "./components/bannerOffer";
import BannerIconis from "./components/bannerIconis";
import BannerJuice from "./components/bannerJuice";
import BannerContext from "./components/bannerContext";
import BannerEmail from "./components/bannerEmail";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <BannerExplore />
          <BannerFreshFruit />
          <BannerFarm />
          <BannerProducts />
          <BannerReplice />
          <BannerOffer />
          <BannerIconis />
          <BannerJuice />
          <BannerContext />
          <BannerEmail />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
