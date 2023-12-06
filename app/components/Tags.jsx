'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../redux/features/tags/tagsSlice";
import { tagsFilter } from "../redux/features/filter/filterSlice";

const Tags = ()=>{
    const dispatch = useDispatch()
    const {tags} = useSelector(state => state.tags)
    const filter = useSelector(state => state.filters)
    console.log(filter);
    useEffect(() =>{
       dispatch(fetchTags())
    }, [dispatch])

    //select tag
   
    return (
        <section>
            <div
                class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                {
                tags.map((tag) =>{
                    const {id, title} = tag;
                return <div class={  ` ${filter.tags?.includes(title)? "bg-blue-500 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer" } `} onClick={()=>dispatch(tagsFilter(title))} >{title}</div>
                })
            }
                
               
            </div>
        </section>
    )
}

export default Tags;