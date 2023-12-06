import Search from "./Search";


const Nav = ()=>{
    return (
        <nav class="bg-slate-100 shadow-md">
            <div
                class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <a href="/">
                    

                    
                    <img
                        class="h-10"
                        src="/assets/lws.svg"
                        alt="Learn with Sumit"
                    />
                </a>
                
                   <Search/>
                    
                    
            </div>
        </nav>
    )
}

export default Nav;