interface BlogCardType {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({ authorName, title, content, publishedDate }: BlogCardType) => {
    return <div>

        <div className="p-4 border-b border-slate-200 pb-4">

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
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>

        </div>

    </div>
}

function Circle() {
    return <div className="h-1 w-1 bg-slate-500 rounded-full">

    </div>
}

function Avatar({name}: {name: string}) {
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-slate-500 rounded-full">
    <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
}