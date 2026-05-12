import React from "react";
import { BookmarkIcon , SearchIcon } from "lucide-react";


export default function Navbar(){



    return <>
  
        <header className="bg-paper border-b border-edge px-8 py-4 flex items-center justify-between sticky top-0">
        <span className="text-base font-bold tracking-tight">Blogify</span>
      <span className="text-sm text-muted"> Posts </span>
         <span className="text-sm text-muted"> Authors </span>
        <span className="text-sm text-muted"> <SearchIcon/> </span>
         <span className="text-sm text-muted"> <BookmarkIcon/> </span>

      </header>
    
    
    </>
}