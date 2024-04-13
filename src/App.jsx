import iconIg from './assets/icons/ig.svg'
import iconLi from './assets/icons/li.svg'
import iconGh from './assets/icons/gh.svg'
import iconGD from './assets/GD.svg'
import iconPD from './assets/PD.svg'
import iconWD from './assets/WD.svg'

function App() {

  return (
    <>
      {/* Navbar & Hero */}
      <div className="w-full bg-primary h-screen flex flex-col justify-center">
        <div className="Hero w-full max-w-screen-xl flex flex-row justify-center my-auto mx-auto pt-16 px-4 lg:px-8 xl:px-0">
            <div className="text-white text-3xl w-max md:text-6xl lg:text-5xl font-normal py-4">I do magic that</div>
            <div className="bg-gradient-to-r from-secondary1 to-secondary2 bg-clip-text text-transparent w-max text-3xl md:text-6xl lg:text-5xl font-black py-4">&nbsp;turns ideas to reality</div>
        </div>
      </div>
    </>
  );
}

export default App
