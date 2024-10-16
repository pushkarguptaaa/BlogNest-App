import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
        <Appbar />

        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard authorName = {"Pushkar Gupta"} title = {"how to be happy in life"} content = {"contenthow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in life"} publishedDate = {"16 Oct 2024"}/>

                <BlogCard authorName = {"Pushkar Gupta"} title = {"how to be happy in life"} content = {"contenthow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in life"} publishedDate = {"16 Oct 2024"}/>

                <BlogCard authorName = {"Pushkar Gupta"} title = {"how to be happy in life"} content = {"contenthow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in lifehow to be happy in life"} publishedDate = {"16 Oct 2024"}/>
            </div>
        
        </div>

    </div>
}