import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'


import Home,{loader as HomeLoader} from './Pages/Home'
import Navbar from './components/ui/Navbar'
import LayoutPage from './Pages/LayoutPage'
import Authors from './Pages/Authors'
import PostDetail from './Pages/PostDetail'
import Posts from './Pages/Posts'



 

const router = createBrowserRouter(createRoutesFromElements(

<Route path='/' element={<LayoutPage/>}>
<Route index path='/'  element={<Home/>} loader={HomeLoader}/>

<Route path='posts' element={<Posts/>} loader={HomeLoader}>
 <Route path='/posts/:id' element={<PostDetail/>}/> 
</Route> 

<Route path='authors' element={<Authors/>}/>



<Route path='*' element={<h1>Not Found 😁😁</h1>}/>
</Route>



))


export default function App() {
  return (
    <div className="min-h-screen bg-subtle">

      <RouterProvider router={router}/>
    </div>
  )
}

// ── Internal helper components ──────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold text-muted uppercase tracking-wider">
      {children}
    </p>
  )
}

function Row({ label, children }) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {label && <span className="text-xs text-muted w-20 shrink-0">{label}</span>}
      {children}
    </div>
  )
}
