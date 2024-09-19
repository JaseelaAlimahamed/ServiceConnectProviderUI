import image from "./assets/Group.png";
import { useState, useEffect } from "react";

const Hello = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading effect, replace this with actual logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stops loading after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-100 bg-[#1D1F2A] bg-opacity-90 flex justify-center items-center">
      {isLoading ? (
        // Loading spinner
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-white"></div>
        </div>
      ) : (
        // Modal content
        <div className="w-[360px] h-[460px] bg-white rounded-3xl flex flex-col items-center">
          <div>
            <img
              className="w-[139px] h-[142px] mt-[72px]"
              src={image}
              alt="Description of image"
            />
          </div>

          <p className="mt-[20px] font-default font-semibold text-[24px] text-[#202244] ">
            Congratulations
          </p>

          <p className=" font-input text-[14px]">
            Your Account is Ready to Use. You will be{" "}
          </p>
          <p className=" font-input text-[14px]">
            redirected to the Home Page in a Few
          </p>
          <p className=" font-input text-[14px]">Seconds.</p>
        </div>
      )}
    </div>

  );
};

export default Hello;
