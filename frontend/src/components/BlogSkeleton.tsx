import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-xl cursor-pointer">

        <div className="flex">
            <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>

            <div className="flex flex-col justify-center font-extralight pl-2 text-sm">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>

            <div className="flex flex-col justify-center pl-2">
                <Circle />
            </div>
            
            <div className="flex flex-col justify-center pl-2 text-slate-500 font-thin text-sm">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div> 
        </div>

        <div className="text-xl font-semibold pt-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>

        <div className="text-md font-light">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>

        <div className="text-slate-500 text-sm font-thin pt-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>

        </div>
        <span className="sr-only">Loading...</span>
    </div>
}