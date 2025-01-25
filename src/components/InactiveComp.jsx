import React from "react";

function InactiveComp({ title, detail, number, setClicked,index }) {
    return (
        <div
            onClick={() => {
                setClicked(index);
            }}
            className="h-[461px] w-[280px] bg-[#F9EBEC] text-[#C33241] items-center justify-center gap-[6.4rem] rounded-[32px] flex flex-col "
        >
            <div className="flex pt-10">
                <div className="rotate-270 text-start flex flex-col gap-2">
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
                    <span className="font-light text-6xl absolute top-[-30px] right-[35px]">
                        +
                    </span>
                </p>
            </div>
        </div>
    );
}

export default InactiveComp;
