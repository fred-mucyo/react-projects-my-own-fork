import React from "react";
import MainContent from "./Components/MainContent";
import { Routes,Route } from "react-router-dom";
import EachMemberPage from "./Pages/EachMemberPage";
import AllContentPage from "./Pages/AllContentPage";
import LayoutPage from "./Pages/LayoutPage";
import { TaskProvider } from "../TaskProvider";


export default function App(){
return (
 
<TaskProvider>

<Routes>
<Route path="/" element={<LayoutPage/>}>
<Route  index path="/" element={<AllContentPage/>}/>
<Route path="/:id" element={<EachMemberPage/>}/>
</Route>

</Routes>
</TaskProvider>


)
}