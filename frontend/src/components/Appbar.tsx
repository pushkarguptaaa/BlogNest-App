import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="flex justify-between px-10 border-b border-slate-200 py-4">
        <Link className="flex flex-col justify-center cursor-pointer" to={"/blogs"}>
                BlogNest
        </Link>

        <div>
            <Avatar name= {"Pushkar"} size={"big"}/>
        </div>
    </div>
}