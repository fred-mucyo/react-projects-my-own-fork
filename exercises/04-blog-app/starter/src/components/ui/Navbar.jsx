import React from "react";
import { BookmarkIcon , SearchIcon } from "lucide-react";


export default function Navbar(){



    return <>
    
        <header className="bg-paper border-b border-edge px-8 py-4 sticky top-0 flex justify-between">
            
        <span className="text-base font-bold tracking-tight">Blogify</span>
        <span className="flex justify-end gap-5">
        <span className="text-sm text-muted"> Posts </span>
         <span className="text-sm text-muted"> Authors </span>
        <span className="text-sm text-muted"> <SearchIcon size={20}/> </span>
        <span className="text-sm text-muted flex justify-end"> <BookmarkIcon size={20}/>0</span> 
         </span>

      </header>
    
    
    </>
}