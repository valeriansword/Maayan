
import { servicesData } from "../Constants/Data";
import Contact from "./Contact";

const Services = () => {
  return (
    <div className="relative  border-b bg-gradient-to-b from-[#dad7cd] to-[#ffffff] border-neutral-800 font-unbounded min-h-[800px]">
      <div className="text-center pt-[20px]">
        <span className=" font-unbounded text-[#3a5a40] text-3xl font-medium px-2 py-1 uppercase">
          Services
        </span>
        <h2 className="text-3xl max-sm:text-2xl lg:text-3xl text-[#3a5a40] font-thin font-unbounded tracking-wide">
        Navigate your global trade with us
          
        </h2>
      </div>
      
      {/* Feature blocks section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 lg:mt-20">
        {servicesData.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 ">
            <div className="p-6 sm:p-8 md:p-10 border bg-[#dad7cd] text-[#3a5a40] border-neutral-500 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                {/* Image with shadowish opacity */}
                <img
                  src={feature.img}
                  alt={feature.text}
                  className="h-[250px] w-[350px] object-cover rounded-md border border-[#3a5a40] shadow-sm shadow-[#DAD7CD] opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                {/* Feature Title */}
                
              </div>

              <div className="mt-4">
                {/* Icon and title */}
                <div className="flex items-center space-x-2">
                  <span className="p-2 w-10 h-10 bg-neutral-900 text-[#3A5A40] justify-center items-center rounded-full">
                    {feature.icon}
                  </span>
                  <h5 className="text-lg text-[#3a5a40]  font-semibold">
                    {feature.text}
                  </h5>
                </div>
                {/* Description */}
                <p className="mt-4 text-md text-neutral-500 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-3xl text-center font-unbounded mt-6 text-[#3a5a40]">
        Got any questions or ready to embark on your 
        voyage with us?
        Drop us a Message!
      </h2>
      <Contact />
    </div>
  );
};

export default Services;
