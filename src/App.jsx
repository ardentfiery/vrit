import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import InactiveComp from "./components/InactiveComp";
import ActiveComp from "./components/ActiveComp";

function App() {
    const [clicked, setClicked] = useState(0);

    const courseDetails = [
        {
            title: "All courses",
            detail: "courses you are powering through right now",
            number: "23",
        },
        {
            title: "Upcoming Courses",
            detail: "exciting new courses waiting to boost your skills",
            number: "05",
        },
        {
            title: "Ongoing Courses",
            detail: "currently happening -don't miss out on the action!",

            number: "10",
        },
    ];

    return (
        <div className="flex  justify-around text-start  ">
          {console.log(clicked)}
            <div>
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-[24px]">
                            Explore our classes and master trending skills!
                        </p>
                    </div>
                    <div className="nohemi-font">
                        <p className="font-bold text-[32px] ">
                            Dive Into{" "}
                            <span className="text-[#1DA077]">
                                What's Hot Right Now!🔥
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 mt-10">


                  {
                    courseDetails.map((course,index) => {
                      
                      return (
                        <>
                        {
                          index === clicked ? (
                            <ActiveComp
                                
                                title={course.title}
                                detail={course.detail}
                                number={course.number}
                                setClicked={setClicked}
                                />
                                
                              ) : 
                              (<InactiveComp
                                  title={course.title}
                                  detail={course.detail}
                                  number={course.number}
                                  setClicked={setClicked}
                                  index={index}
                                  />)
                        }  
                        </>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    );
}

export default App;
