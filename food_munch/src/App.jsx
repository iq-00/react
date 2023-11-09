import Banner from "./component/Banner";
import Choose from "./component/Choose";
import ExploreMenu from "./component/ExploreMenu";
import Follow from "./component/Follow";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Payment from "./component/Payment";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="wrapper">
        <Choose />
        <ExploreMenu />
        <Payment />
      </div>
      <Follow />
      <Footer />
    </>
  );
}

export default App;
