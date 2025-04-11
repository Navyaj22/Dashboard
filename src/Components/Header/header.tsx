import { useRef } from "react";
import { useNavigate} from "react-router-dom" 
import { BorderBeam } from "../Background/border";
import Logo from '../../assets/Logo_Orton.png'
export default function header() {
  const navigate = useNavigate()

  return (
    <>
      <div className="fixed z-10 w-[92%] mx-16 flex justify-between items-center bg-white mt-2 border-2 rounded-full h-20">
        <BorderBeam/>
        <img className="size-10 ml-10 mr-4" src={Logo} alt="Logo"></img>
        <h1 onClick={() => navigate("/")} className="text-xl mr-52 font-bold bg-white">
          Orton.Ai
        </h1>
        <ul className="flex font-work-sans mr-[330px] flex-row w-auto text-lg justify-center items-center rounded-full text-black text-center bg-white gap-10">
          <li className="p-4 w-36 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            Work
          </li>
          <li className="p-4 w-36 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            Service
          </li>
          <li className="p-4 w-36 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            Prices
          </li>
          <li className="p-4 rounded-full w-36 transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            Contact
          </li>
        </ul>
      </div>
    </>
  )
}