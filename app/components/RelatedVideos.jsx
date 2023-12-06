'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../redux/features/relatedVideo/relatedVideosSlice";

const RelatedVideos = ({currentVideoId ,tags }) => {
    const dispatch = useDispatch();
    const {relatedVideos, isLoading, isError, error} = useSelector(state=>state.relatedVideos);
    console.log(relatedVideos);
    // fetching related videos on loading
    useEffect(()=>{
        console.log(currentVideoId);
        dispatch(fetchRelatedVideos({tags, id:currentVideoId}))
    },[dispatch,tags, currentVideoId])
    return (
        <div
                        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                        {/* <!-- single related video --> */}
                        {
                        relatedVideos.map(relatedVideo=>{
                            const {id,title, date, thumbnail, duration, views, author } = relatedVideo;
                            return <div class="w-full flex flex-row gap-2 mb-4">
                            <div
                                class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
                            >
                                <a href={`/video/${id}`}>
                                    <img
                                        src={thumbnail}
                                        class="object-cover"
                                        alt="Some video title"
                                    />
                                </a>
                                <p
                                    class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                                >
                                    {duration} {id}
                                </p>
                            </div>

                            <div class="flex flex-col w-full">
                                <a href={`/video/${id}`}>
                                    <p
                                        class="text-slate-900 text-sm font-semibold"
                                    >
                                        {title}
                                    </p>
                                </a>
                                <a
                                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                    href={`/video/${id}`}
                                >
                                    {author}
                                </a>
                                <p class="text-gray-400 text-xs mt-1">
                                    {views} views . {date}
                                </p>
                            </div>
                        </div>
                        })
                        }
                        
                    </div>
    )
}

export default RelatedVideos;