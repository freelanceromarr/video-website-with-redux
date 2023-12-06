'use client'
import RelatedVideos from "@/app/components/relatedVideos";
import Meta from "@/app/components/singleVideo/meta";
import { fetchVideo } from "@/app/redux/features/video/videoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleVideo = ({params})=>{
    
   const dispatch = useDispatch()
   const {video} = useSelector(state=> state.video)
    const {id, title, description, author, date, duration, likes, unlikes, link, thumbnail, tags,  } = video;
    useEffect(()=>{
        dispatch(fetchVideo(params.id))
    },[dispatch])
    console.log(tags);
    return (
        <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div class="grid grid-cols-3 gap-2 lg:gap-8">
                    <div class="col-span-full w-full space-y-8 lg:col-span-2">
                        {/* <!-- video player --> */}
                        <iframe
                            width="100%"
                            class="aspect-video"
                            src= {link}
                            title={title}
                            frameborder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>

                        {/* <!-- video description --> */}
                        <div>
                            <h1
                                class="text-lg font-semibold tracking-tight text-slate-800"
                            >
                                {title}
                            </h1>
                            <div
                                class="pb-4 flex items-center space-between border-b"
                            >
                                <h2
                                    class="text-sm leading-[1.7142857] text-slate-600 w-full"
                                >
                                    Uploaded on {date}
                                </h2>

                                {/* <!-- like/unlike --> */}
                                 <Meta likes={likes} unlikes={unlikes}  />
                            </div>

                            <div
                                class="mt-4 text-sm text-[#334155] dark:text-slate-400"
                            >
                                {description}
                            </div>
                        </div>
                    </div>

                    {/* <!-- related videos --> */}
                    <RelatedVideos  tags={tags} currentVideoId = {id}/>
                </div>
            </div>
        </section>
    )
}

export default SingleVideo;