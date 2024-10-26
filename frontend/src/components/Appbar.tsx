import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="flex justify-between px-10 border-b border-slate-200 py-4">
        <Link className="flex flex-col justify-center cursor-pointer" to={"/blogs"}>
                BlogNest
        </Link>

        <div>
            <Link to={"/publish"}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            <Avatar name= {"Pushkar"} size={"big"}/>
        </div>
    </div>
}