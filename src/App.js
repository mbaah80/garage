import './App.css';
import TopNav from './component/header/topNav';
import Header from './component/header/header';
import Banner from './component/banner/jumbotron';
import Product from "./component/product/index";
import About   from "./component/about/index";
import Price from "./component/price/index";
import Team from "./component/team/index";
import Testimonials from "./component/testimonials/index";
import Contact from "./component/contact/index";
import Footer from './component/footer/index';


function App() {
  return (
    <div className="container-fluid">
        <TopNav />
        <Header />
        <Banner />
        <Product />
        <About />
        <Price />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
        <a href="#" id="back-to-top" className="scrollBtn" title="Back to top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
        </a>
    </div>
  );
}

export default App;
