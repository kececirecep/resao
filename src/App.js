import './App.css';
import './scss/style.scss'
import './animate.min.css'


import { Route, Routes } from 'react-router-dom';
 
import Footer from './components/footer/Footer';


import { useEffect } from 'react';
import WOW from 'wow.js';


import About from './pages/About' 
import Blog from './components/pages/Blog' 
import Service from './components/pages/Service' 
import Portfolio from './components/pages/Portfolio' 
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import PortfolioDetails from './pages/PortfolioDetails'
import ServiceDetails from './pages/ServiceDetails'
import AboutComponents from './components/pages/AboutComponents'
import Brands from './components/pages/Brands'
import ContactForms from './components/pages/ContactForms'
import Counter from './components/pages/Counter'
import Team from './components/pages/Team'
import Pagination from './components/pages/Pagination'
import PricingTable from './components/pages/PricingTable'
import ErrorPage from './components/404/ErrorPage'

//Demos
import MainDemo from './page-demo/MainDemo' 
import Creative from './page-demo/Creative'
import Design from './page-demo/Design'
import Minimal from './page-demo/Minimal'
import Interactive from './page-demo/Interactive'

// To delete the demo page, click here and delete the route demo line.
import DemoPages from './DemosPages'


function App() {
  useEffect(() => {
    const initializeWOW = () => {
      new WOW({
        live: false,
      }).init();
    };

    initializeWOW();
  }, []);


  return (
    <div className='overflow-x-hidden'>

      <Routes>
        <Route path='/' element={<MainDemo />} /> 
        <Route path='/creative' element={<Creative />} />
        <Route path='/design' element={<Design />} />
        <Route path='/minimal' element={<Minimal />} />
        <Route path='/interactive' element={<Interactive />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about-components' element={<AboutComponents />} />
        <Route path='/blog-details' element={<BlogDetails />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio-details' element={<PortfolioDetails />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service-details' element={<ServiceDetails />} /> 
        <Route path='/brands' element={<Brands />} /> 
        <Route path='/contact-forms' element={<ContactForms />} /> 
        <Route path='/team' element={<Team />} /> 
        <Route path='/counter' element={<Counter />} /> 
        <Route path='/pagination' element={<Pagination />} /> 
        <Route path='/pricing-table' element={<PricingTable />} /> 
        <Route path='/error-page' element={<ErrorPage />} /> 
        <Route path='/contact' element={<Contact />} />
         <Route path='/demos' element={<DemoPages />} /> {/* Demo line */}
        <Route path='*' element={<ErrorPage />} />  
      </Routes>   

      <Footer />
    </div>
  );
}

export default App;
