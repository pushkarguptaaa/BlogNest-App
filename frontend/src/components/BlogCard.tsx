import { Link } from "react-router-dom"

interface BlogCardType {

    authorName: string,
    title: string,
    content: string,
    publishedDate: string
    id: string
}

export const BlogCard = ({ authorName, title, content, publishedDate, id }: BlogCardType) => {
    return <Link to={`/blog/${id}`} >

        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-xl cursor-pointer">

            <div className="flex">
                <Avatar name= {authorName} /> 

                <div className="flex flex-col justify-center font-extralight pl-2 text-sm">
                    {authorName}
                </div>

                <div className="flex flex-col justify-center pl-2">
                    <Circle />
                </div>
                
                <div className="flex flex-col justify-center pl-2 text-slate-500 font-thin text-sm">
                    {publishedDate}
                </div> 
            </div>

            <div className="text-xl font-semibold pt-2">
                {title}
            </div>

            <div className="text-md font-light">
                {content.slice(0, 100) + "..."}
            </div>

            <div className="text-slate-500 text-sm font-thin pt-2">
                {`${Math.ceil(content.length / 200)} minute(s) read`}
            </div>

        </div>

    </Link>
}

function Circle() {
    return <div className="h-1 w-1 bg-slate-500 rounded-full">

    </div>
}

export function Avatar({name, size= "small"}: {name: string, size?: "small" | "big"}) {
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-slate-500 rounded-full`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>{name[0]}</span>
</div>
}