'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../redux/features/filter/filterSlice";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Search = ()=> {
    const dispatch = useDispatch()
    const {search}= useSelector(state=>state.filters)
    const [input, setInput]= useState(search)
    

    

    //handle search filter
    const onSubmitHandler = (e)=> {
        e.preventDefault()
        dispatch(searchFilter(input))
       
    }
    
    return (
        <div
                    class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                   <form onSubmit={onSubmitHandler} >
                        <input
                            onChange={(e)=>setInput(e.target.value)}
                            class="outline-none border-none mr-2"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                    </form>
                    
                    <img 
                        onClick={onSubmitHandler}
                        class="inline h-4 cursor-pointer"
                        src="/assets/search.svg"
                        alt="Search"
                    />
                </div>
        
    )
    
}

export default Search;