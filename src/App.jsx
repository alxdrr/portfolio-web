import iconIg from "./assets/icons/ig.svg";
import iconLi from "./assets/icons/li.svg";
import iconGh from "./assets/icons/gh.svg";
import iconGD from "./assets/GD.svg";
import iconPD from "./assets/PD.svg";
import iconWD from "./assets/WD.svg";

function App() {
  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <nav className="w-screen items-center top-0 self-center lg:absolute z-10 fixed justify-between flex h-28git px-14 max-w-screen-xl">
          <div className="bg-gradient-to-r from-gray-50 to-gray-400 w-max bg-clip-text text-transparent font-bold text-2xl font-oxanium">CHARLES ALEXANDER</div>
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
    </>
  );
}

export default App;
