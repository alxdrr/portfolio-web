import iconIg from "./assets/icons/ig.svg";
import iconLi from "./assets/icons/li.svg";
import iconGh from "./assets/icons/gh.svg";
import exp1 from "./assets/experiences/Bangkit.png";
import exp2 from "./assets/experiences/Digistar.png";
import exp3 from "./assets/experiences/Forcoms.png";
import exp4 from "./assets/experiences/Incognito.png";
import exp5 from "./assets/experiences/Infinite.png";
import iconGD from "./assets/GD.svg";
import iconPD from "./assets/PD.svg";
import iconWD from "./assets/WD.svg";
import portrait from "./assets/portrait.svg";

function App() {
  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <nav className="w-screen items-center top-0 self-center lg:absolute z-10 fixed justify-between flex h-28 px-14 max-w-screen-xl">
          <div className="bg-gradient-to-r from-gray-50 to-gray-400 w-max bg-clip-text text-transparent font-extralight text-2xl">charles alexander</div>
          <section className="flex gap-10">
            <img src={iconIg} className="" alt="" />
            <img src={iconLi} alt="" />
            <img src={iconGh} alt="" />
          </section>
        </nav>
        <div className="Hero w-full max-w-screen-xl flex flex-row justify-center my-auto mx-auto px-4 lg:px-8 xl:px-0">
          <div className="text-white text-3xl w-max md:text-6xl lg:text-4xl font-extralight">i do magic that</div>
          <div className="bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent w-max text-3xl md:text-6xl lg:text-4xl font-black">&nbsp;turns ideas to reality</div>
        </div>
      </div>
      {/* About */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <div className="w-full items-center max-w-screen-xl flex flex-col justify-center my-auto mx-auto px-4 lg:px-8 xl:px-0">
          <div className="bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent w-max text-3xl md:text-6xl lg:text-4xl font-extralight">charles alexander</div>
          <div className="w-full flex justify-between items-center">
            <section className="flex items-center justify-center flex-col gap-10 w-full">
              <p className="text-white text-xl max-w-xs text-center">I&apos;m Alex, desigining for life with passion and purposes</p>
              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent text-9xl font-oxanium">10+</h1>
                <p className="text-white">clients satisfied</p>
              </div>
            </section>
            <img src={portrait} className="h-3/4" alt="" />
            <section className="flex items-center justify-center flex-col gap-10 w-full">
              <p className="text-white text-xl text-center">
                Jakarta, Indonesia <br />
                charlesalexander0302@gmail.com
              </p>
              <div className="flex flex-col items-center">
                <h1 className="bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent text-9xl font-oxanium">3</h1>
                <p className="text-white">years of experience</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Experience */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <div className="w-full items-center max-w-screen-xl flex flex-col justify-center my-auto mx-auto px-4 lg:px-8 xl:px-0 gap-20">
          <div className="bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent w-max text-3xl md:text-6xl lg:text-4xl font-extralight">journey of earning professional excellence</div>
          <div className="w-full flex justify-center max-w-3xl flex-wrap gap-20 items-center">
            <img src={exp1} alt="instance" className="w-44" />
            <img src={exp2} alt="instance" className="w-44" />
            <img src={exp4} alt="instance" className="w-44" />
            <img src={exp5} alt="instance" className="w-44" />
            <img src={exp3} alt="instance" className="w-44" />
          </div>
        </div>
      </div>
      {/* Experience */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <div className="w-full items-center max-w-screen-xl flex flex-col justify-center my-auto mx-auto px-4 lg:px-8 xl:px-0 gap-20">
          <div className="bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent w-max text-3xl py-1 md:text-6xl lg:text-4xl font-extralight">offering design and development solutions.</div>
          <div className="w-full h-3/4 gap-20 flex justify-center flex-wrap items-center">
            <div className="flex flex-col py-10 gap-4">
              <img src={iconPD} alt="" className="h-36 pb-10" />
              <h1 className="text-xl xl:text-3xl lg:text-2xl text-secondary text-center font-black bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent">Product Design</h1>
              <p className="text-white text-center">I create product with passion and purposes</p>
            </div>
            <div className="flex flex-col py-10 gap-4">
              <img src={iconGD} alt="" className="h-36 pb-10" />
              <h1 className="text-xl xl:text-3xl lg:text-2xl text-secondary text-center font-black bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent">Graphic Design</h1>
              <p className="text-white text-center">I create designs that satisfy your eyes</p>
            </div>
            <div className="flex flex-col py-10 gap-4">
              <img src={iconWD} alt="" className="h-36 pb-10" />
              <h1 className="text-xl xl:text-3xl lg:text-2xl text-secondary text-center font-black bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent">Web Development</h1>
              <p className="text-white text-center">I turns design to real applications</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
