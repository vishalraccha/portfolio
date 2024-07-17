import React from "react";

function Projects() {
 const toggle = () => {
   const element = document.getElementById("addnewcont");
   const btn = document.getElementById("seemorebtn");
   if (element.classList.contains("hidden")) {
     element.classList.remove("hidden");
     element.classList.add("visible");
     btn.classList.add("hidden");
   } else {
     element.classList.add("hidden");
   }
 };

  return (
    <div className="h-full w-full p-10">
      <div className="headtext h-full flex justify-center">
        <h4 className="text-6xl font-[HolidayFree] text-white">Projects</h4>
        <h3 className="text-2xl font-[HolidayFree] mt-16 ml-[-80px] text-zinc-600">
          Created By Me
        </h3>
      </div>

      <div className="projectcontainer h-full w-full p-8 flex justify-center items-center">
        <div className="projects w-[70vw] h-full  relative">
          <div className="twoinone flex justify-center ">
            <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#a8a8a8] m-4 rounded-3xl">
              <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#c8c9ca] m-4 rounded-3xl"></div>
            </div>
            <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#a8a8a8] m-4 rounded-3xl">
              <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#c8c9ca] m-4 rounded-3xl"></div>
            </div>{" "}
          </div>
          <div className="twoinone flex justify-center ">
            <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#a8a8a8] m-4 rounded-3xl">
              <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#c8c9ca] m-4 rounded-3xl"></div>
            </div>
            <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#a8a8a8] m-4 rounded-3xl">
              <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#c8c9ca] m-4 rounded-3xl"></div>
            </div>
          </div>
          <button
            id="seemorebtn"
            className=" w-28 h-10 text-white m-2 cursor-pointer absolute left-32"
            onClick={toggle}
          >
            See More...
          </button>
          <div id="addnewcont" className="twoinonenew flex justify-center hidden">
            <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#a8a8a8] m-4 rounded-3xl">
              <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#c8c9ca] m-4 rounded-3xl"></div>
            </div>
            <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#a8a8a8] m-4 rounded-3xl">
              <div className="project w-[25vw] h-[15vw] mix-blend-multiply bg-[#c8c9ca] m-4 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
