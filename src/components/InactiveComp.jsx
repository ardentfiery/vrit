import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function InactiveComp({ title, detail, number, setClicked, index,clicked }) {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      if (clicked) {
        gsap.from(".detail", {
          transform: "rotate(10deg)",
          translateY: "200px",
          opacity: "0",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      onClick={() => {
        setClicked(index);
      }}
      ref={containerRef}
      className="h-[461px] w-[280px] clickmewrapper cursor-pointer bg-[#F9EBEC] text-[#C33241] items-center justify-center gap-[6.4rem] rounded-[32px] flex flex-col relative "
    >
      <div className="clickme absolute top-[-60px] text-black">
        <div>Click me!</div>
        <div>
          <img
            className="invert h-[50px] scale-x-[-1] rotate-[-55deg]"
            src="/arrow.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex pt-10">
        <div
          className="rotate-270 text-start flex flex-col gap-2 detail"
          style={{}}
        >
          <div className="text-[25px] font-extrabold pr-[6rem] ">
            <p>{title}</p>
          </div>
          <div className="text-[18px] pr-10">
            <p>{detail}</p>
          </div>
        </div>
      </div>
      <div className="text-center relative  w-[100%]">
        <p
          className="text-9xl text-[#C33241]"
          style={{
            fontFamily: "Nohemi",
          }}
        >
          {number}
          <span className="font-light hoverplus text-6xl absolute top-[-30px] right-[35px]">
            +
          </span>
        </p>
      </div>
    </div>
  );
}

export default InactiveComp;
