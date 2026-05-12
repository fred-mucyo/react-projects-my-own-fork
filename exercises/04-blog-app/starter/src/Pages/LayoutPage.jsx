import React from "react";
import { Outlet,Link} from "react-router-dom";

import { BookmarkIcon , SearchIcon } from "lucide-react";

export default function LayoutPage(){

    return (


        <>
        
       <header className="bg-paper border-b border-edge px-8 py-4 flex items-center justify-between sticky top-0">

        <Link to="/" ><span className="text-base font-bold tracking-tight">Blogify</span> </Link>
         <Link to="posts"><span className="text-sm text-muted"> Posts </span> </Link>
         <Link to='authors'> <span className="text-sm text-muted"> Authors </span> </Link>
         <span className="text-sm text-muted"> <SearchIcon /> </span>
         <span className="text-sm text-muted"> <BookmarkIcon/> </span> 

      </header>

         <Outlet/>


        </>
        
        
        
    )
}