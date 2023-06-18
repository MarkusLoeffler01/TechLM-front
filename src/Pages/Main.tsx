import { useState } from 'react'
import '../App.css'
import "../css/tailwind.out.css"
import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';

function App() {
  const [count, setCount] = useState(0);
  let x = "dddddd";
  return (
    <div className="h-screen w-screen flex flex-col" id="flex">
      <NavBar/>
      <main className="flex-grow min-w-[100vw]">
        <div className="container mx-auto w-full lg:w-1/2 grid grid-cols-1 grid-flow-row items-center">
          <div className='mb-10 mx-auto'>
            <Carousel />
          </div>
          
        </div>
        <div className="grid-cols-3 mx-auto hidden lg:grid gap-x-2 w-1/2">
        </div>
      </main>
    </div>
  )
}

export default App;