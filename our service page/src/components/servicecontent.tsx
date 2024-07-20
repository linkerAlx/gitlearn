import React from "react";
import IMG77 from "../assets/serviceimage/IMG-77.jpg";
import IMG24 from "../assets/serviceimage/IMG-24.jpg";
import IMG72 from "../assets/serviceimage/IMG-72.jpg";
import IMG86 from "../assets/serviceimage/IMG-86.jpg";
import IMG129 from "../assets/serviceimage/IMG-129.jpg";
const Servicecontent: React.FC = () => {
  return (
    <div className="  bg-gray-300 min-h-full w-full overflow-hidden ">
      <div className=" lg:grid grid-cols-2 ">
        <div className="flex flex-col space-y-5">
          <p className=" pt-10 px-20 mx-10 text-xl font-semibold -tracking-wide ">
            <span className="bg-cyan-500  p-1">OUR</span> SERVICES
          </p>
          <div className="text-2xl font-bold px-20 mx-10">
            <p className="pt-10  ">EdgeReach Tech: Empowering Real-</p>
            <p className=" ">Life Solutions with Cutting-Edge </p>
            <p className=""> Technology</p>
          </div>
          <div className="mx-20 px-10">
            <hr className=" my-5 pt-1 bg-slate-400 w-32  " />
          </div>
          <div className="text-xl font-medium px-20 mx-10 ">
            <p>
              At EdgeReach Tech, we tackle tech and IT challenges head-on to
              craft optimal{" "}
            </p>
            <p> solutions through various services.</p>
          </div>
          <div className="px-20 my-3 mx-10">
            <p>
              Build powerful applications that streamline processes and elevate
              your brand.
            </p>
            <p>
              Connect your data and systems seamlessly for effortless
              information flow.
            </p>
            <p>
              We provide advice to businesses on how they should include
              technology for the{" "}
            </p>
            <p>purpose of reaching many customers in short time.</p>
          </div>
        </div>

        <div className="mt-4 ml-32  lg:flex flex-col justify-center items-center lg:pt-40 gap-10 lg:ml-0  ">
          <div className="lg:flex gap-4  ">
            <div className="card mb-5 ">
              <img
                src={IMG24}
                alt="web dev"
                className="w-80 h-48 object-cover rounded"
              />
              <div className=" bg-white rounded w-80 h-20 flex justify-center gap-10 p-5">
                <div className="bg-cyan-500 h-2 w-14 mt-5 "></div>
                <p className="font-bold">
                  Web App <span className="block"> Development</span>
                </p>
              </div>
            </div>
            <div className="card mb-5">
              <img
                src={IMG86}
                alt="web dev"
                className="w-80 h-48 object-cover rounded"
              />
              <div className=" bg-white rounded w-80 h-20 flex justify-center gap-10 p-5">
                <div className="bg-cyan-500 h-2 w-14 mt-5 "></div>
                <p className="font-bold">
                  E-commerce <span className="block"> solutions</span>
                </p>
              </div>
            </div>
          </div>
          <div className="  lg:flex gap-4 lg:-ml-60 ">
            <div className="card mb-5  ">
              <img
                src={IMG129}
                alt="web dev"
                className="w-80 h-48 object-cover rounded"
              />
              <div className=" bg-white rounded w-80 h-20 flex justify-center gap-10 p-5">
                <div className="bg-cyan-500 h-2 w-14 mt-5 "></div>
                <p className="font-bold">
                  API Development{" "}
                  <span className="block"> and Integration</span>
                </p>
              </div>
            </div>
            <div className="card mb-5">
              <img
                src={IMG72}
                alt="web dev"
                className="w-80 h-48 object-cover rounded"
              />
              <div className=" bg-white rounded w-80 h-20 flex justify-center gap-10 p-5">
                <div className="bg-cyan-500 h-2 w-14 mt-5 "></div>
                <p className="font-bold">
                  Support and <span className="block"> Training</span>
                </p>
              </div>
            </div>
            <div className="card mb-5">
              <img
                src={IMG77}
                alt="web dev"
                className="w-80 h-48 object-cover rounded"
              />
              <div className=" bg-white rounded w-80 h-20 flex justify-center gap-10 p-5">
                <div className="bg-cyan-500 h-2 w-14 mt-5 "></div>
                <p className="font-bold">
                  Web <span className="block"> Development</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-5">
        <button className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-full mb-5 font-bold text-white ">
          ALL SERVICES
        </button>
      </div>
    </div>
  );
};

export default Servicecontent;
