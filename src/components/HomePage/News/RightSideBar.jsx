import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
        <h2 className="font-bold text-lg text-center mb-3">Login Width</h2>
        <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500"><FcGoogle /> Login Width Google</button>
        <button className="btn border-blue-500 text-blue-500"><FaGithub /> Login Width GitHub</button>
        </div>
    </div>
  )
}

export default RightSideBar