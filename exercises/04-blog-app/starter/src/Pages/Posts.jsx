import React from "react";
import { Link, Outlet} from "react-router-dom";



export default function Posts(){
   
    return (<>
    <div className="flex justify-between p-9">
<input type="text" placeholder="Search here!" className="border border-black rounded-full mt-4 "/>
<button>Technology</button>
<button>Design</button>
<button>Science</button>
<button>Culture</button>
<button>Career</button>
</div>

    <Outlet/>
    
    </>
    )
}