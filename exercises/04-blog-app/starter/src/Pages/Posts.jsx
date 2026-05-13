import React from "react";
import { Link,Outlet} from "react-router-dom";
import Home from "./Home";


export default function Posts(){
   
    return (<>
    <div className="flex justify-between p-9">
<input type="text" placeholder="Search here!" className="border border-black rounded-full mt-4 "/>
<button>All</button>
<Link to="?category=1"><button>Technology</button> </Link>
<Link to="?category=2"><button>Design</button></Link>
<Link to="?category=3"> <button>Career</button></Link>
<Link to="?category=4"><button>Science</button></Link>
<Link to="?category=5"><button>Culture</button></Link>


</div>
<Home/>
     <Outlet/> 
    
    </>
    )
}