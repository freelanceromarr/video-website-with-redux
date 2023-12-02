'use client'
import { useEffect } from "react";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from 'react-redux'
import { fetchVideos } from "@/app/redux/features/videos/videoSlice";

const Videos = ()=>{
    const {videos, isLoading, isError, error} = useSelector(state=>state.videos)
    console.log(videos);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchVideos())
    },[dispatch])
    return (
        <section class="pt-12">
            <section class="pt-12">
                <div
                    class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                {
                    videos.map((video)=>{
                        const {id ,title, author, views, date, thumbnail, description, duration} = video
                        return <div
                        key ={id}
                        class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
                    >
                        <div class="w-full flex flex-col">
                            <div class="relative">
                                <a href="video.html">
                                    <img
                                        src={thumbnail}
                                        class="w-full h-auto"
                                        alt="Some video title"
                                    />
                                    {title}
                                </a>

                                <p
                                    class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                                >
                                    {duration}
                                </p>
                            </div>

                            <div class="flex flex-row mt-2 gap-2">
                                <a href="#" class="shrink-0">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                        class="rounded-full h-6 w-6"
                                        alt="Learn with Sumit"
                                    />
                                </a>

                                <div clas="flex flex-col">
                                    <a href="video.html">
                                        <p
                                            class="text-slate-900 text-sm font-semibold"
                                        >
                                            
                                        </p>
                                    </a>
                                    <a
                                        class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                        href="#"
                                    >
                                        {author}
                                    </a>
                                    <p class="text-gray-400 text-xs mt-1">
                                       {views} . {date}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    })
                }
                    

                    {/* <!-- error section
                    <div class="col-span-12">some error happened</div> --> */}
                </div>
            </section>
                    <Pagination/>
        </section>
    )
}

export default Videos;