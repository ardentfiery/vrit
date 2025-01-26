import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ActiveComp({ title, detail, number, clicked }) {
  const containerRef = useRef(null);
  
  useGSAP(
    () => {
        gsap.from(".imggroup", {
          left: "-20rem",
        });
        gsap.from(".detail", {
          transform: "rotate(-90deg)",
          transformOrigin: "0% 0%",
        });
    },
    { scope: containerRef }
  );


  return (
    <div
      ref={containerRef}
      className="leftbox bg-[#C33241] h-[461px] w-[592px] rounded-[32px] flex flex-col justify-between py-[2rem] overflow-hidden transition-ease-in-out duration-1000 transition-all"
    >
      <div className="flex justify-end px-[3rem] course-arrow-container cursor-pointer">
        <div className="w-fit flex items-center gap-2 ">
          <div className="text-white ">View all Courses</div>
          <div className="text-white">
            <FaArrowRight className="arrowanimation" />
          </div>
        </div>
      </div>
      <div className="flex gap-[42px] justify-around px-[4rem] relative">
        <div className="absolute imggroup top-[-1rem]">
          <div className="flex gap-[42px] justify-around px-[4rem] w-[592px]">
            <div>
              <img className=" w-[120px]" src="/reacticon.png" alt="" />
            </div>
            <div>
              <img className=" w-[120px]" src="/thumb.png" alt="" />
            </div>
            <div>
              <img className=" w-[120px]" src="/vue.png" alt="" />
            </div>
            <div>
              <img className=" w-[120px]" src="/pen.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex px-[5rem] gap-4  ">
        <div className="relative">
          <p className="text-9xl nohemi-font">
            {number}
            <span className="font-light text-6xl absolute top-[-20px] right-[-15px]">
              +
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 detail">
          <p className="text-3xl">{title}</p>
          <div className="flex flex-col items-start font-light ">
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveComp;
