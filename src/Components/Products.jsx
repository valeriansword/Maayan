import { prods } from "../Constants/Data";
import Contact from "./Contact";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="relative  border-b border-neutral-800  bg-gradient-to-b from-[#dad7cd] to-[#ffffff] min-h-[800px]">
      <div className="text-center pt-20 text-[#3a5a40] font-unbounded">
        <span className="text-3xl  font-medium px-2 py-1 uppercase">
          Products
        </span>
        <h2 className="text-3xl max-sm:text-2xl lg:text-3xl   tracking-wide">
        From Our Inventory To Your Market.
          
        </h2>
      </div>
      
      {/* Feature blocks section */}
      
      <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-[20px]  font-unbounded container mx-auto justify-items-center ">
        {prods.map((prod,index)=>(
          <div className="w-[300px] rounded-md shadow-lg mt-[20px] ">
            <img src={prod.img} className="h-[250px] rounded-md w-full object-cover"/>
            <div className="p-2 space-y-[10px] ">
            <h1 className="text-[#3a5a40] text-lg font-bold">{prod.text}</h1>
            <h1>{prod.description}</h1>
            <Link to={`/Products/${prod.id}`}><button className="rounded-md px-2 mt-[20px] py-[2px] bg-gradient-to-b from-[#3a5a40] to-black text-[#dad7cd]">Know more</button></Link>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-3xl font-unbounded text-center font-unbounded mt-6 text-[#3a5a40]">
        Got any questions or ready to embark on your 
        <h2 className="text-3xl sm:text-5xl lg:text-3xl font-unbounded text-center font-unbounded  text-[#3a5a40]">voyage with us?</h2>
        Drop us a Message!
      </h2>
      <Contact />
    </div>
  );
};

export default Products;

{/* <Link to={`/Products/${prod.id}`}><button className="rounded-md px-2 py-[2px] bg-gradient-to-b from-[#3a5a40] to-black text-[#dad7cd]">Know more</button></Link> */}