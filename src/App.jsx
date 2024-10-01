import React,{ useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Products from './Components/Products';
import Admin from "./Components/Admin";
import Gallery from "./Components/Gallery"
import Certificates from './Components/Certificates';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from "./Components/Transition";
import SeparateProducts from './Components/SeparateProducts';
import Contact from './Components/Contact';
function App() {

  return (
    
<AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <Transition />
          
        <BrowserRouter>
      <Navbar />
      <Routes location={location} key={location.pathname}vc >
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Products" element={<Products />} />
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Certificate" element={<Certificates />} />
        <Route path="/Products/:id" element={<SeparateProducts />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
