import {  Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import logo from "../assets/logo1.png";
import { navItems } from "../Constants/Data";
import {Link} from "react-router-dom"
import {Link as scrollLink} from "react-scroll";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 py-1 bg-[#ffffff] backdrop-blur-lg font-semibold text-lg  text-[#3a5a40]">
      <div className="lg:container mx-auto relative lg:text-sm">
        <div className="flex-col justify-between items-center ">
          <div className="flex items-center justify-between max-sm:flex-col lg:flex-shrink-0">
            <h1 className="text-xl font-bold max-sm:font-normal">GSTIN:33CFCPV1527C1ZT</h1>
            <span className="flex  items-center lg:ml-[-30px]">            
                <Link to="/" className="flex items-center"><img className="h-20 w-25 translate-y-1 translate-x-4 max-sm:ml-[-30px]" src={logo} alt="Logo" />
                <span className="text-xl max-sm:text-lg tracking-tight font-unbounded">
                  Mayan Exim Global Transit
                </span></Link>
                <div className="lg:hidden md:flex flex-col justify-end max-sm:mr-[10px]">
                 <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
                 </div>
            </span>
            
          
            <span className="max-sm:hidden ">
                <a href="/logo1.png" download="pdf" className="py-1 px-2 text-center w-[120px] bg-[#3a5a40] ring-2 ring-[#3a5a40] text-[#dad7cd]  rounded-sm">
              Get a Quote
                </a>
            </span>
            
          </div>
        <hr className="mb-[10px] max-sm:hidden"/>
          {/* nav items */}
          
          <ul className="max-md:hidden flex justify-center mx-auto w-full items-center space-x-[100px]  ">
            {navItems.map((item, index) => (
              <Link to={`/${item.label=="Home"?"":item.label}`}>
              <li key={index}>
                <a href={item.href} className="hover:text-[#3a5a40] text-black hover:underline">{item.label}</a>
              </li></Link>
            ))}
             
             <button onClick={scrollToFooter} className="py-1 px-2 w-[100px]  rounded-sm  hover:text-[#3a5a40] text-[#000000]">
              Contact
            </button>
          </ul>
          <hr className="max-sm:hidden mt-[10px] mb-[5px]"/>
          
          
          
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#3a5a40] text-[#dad7cd] w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <Link to={`/${item.label=="Home"?"":item.label}`}>
                  <li key={index} className="py-4">
                  {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md gap-x-6 bg-[#dad7cd] text-[#3a5a40]">
                Get a Quote
              </a>
              
              <p
                className="py-2 px-3 rounded-md bg-gradient-to-r bg-[#dad7cd] text-[#3a5a40] "
                onClick={scrollToFooter}
              >
                Contact
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
