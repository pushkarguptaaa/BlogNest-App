import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="flex justify-between px-10 border-b border-slate-200 py-4">
        <div className="flex flex-col justify-center">
            BlogNest
        </div>

        <div>
            <Avatar name= {"Pushkar"} size={"big"}/>
        </div>
    </div>
}