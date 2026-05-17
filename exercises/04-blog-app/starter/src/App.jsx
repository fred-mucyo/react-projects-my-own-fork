import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home, { loader as HomeLoader, loader } from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import LayoutPage from "./pages/LayoutPage";
import Authors from "./pages/Authors";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import PostLayout from "./pages/PostLayout";
import CategoriesDetail from "./pages/CategoriesDetail";
import AuthorDetails from "./pages/AuthorDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route index path="/" element={<Home />} loader={HomeLoader} />

      <Route element={<PostLayout/>}>

      <Route path="posts" element={<Posts />} loader={HomeLoader}/>
      <Route path="/posts/:slug" element={<PostDetail/>} loader={HomeLoader}/>
      <Route path="/categories/:id" element={<CategoriesDetail/> } loader={HomeLoader}/>
      <Route path="/author/:id" element={<AuthorDetails/>} loader={HomeLoader}/>
      </Route>

      <Route path="authors" element={<Authors />} />

      <Route path="*" element={<h1>Not Found 😓</h1>} />
    </Route>,
  ),
);

export default function App() {
  return (
    <div className="min-h-screen bg-subtle">
      <RouterProvider router={router} />
    </div>
  );
}

// ── Internal helper components ──────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold text-muted uppercase tracking-wider">
      {children}
    </p>
  );
}

function Row({ label, children }) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {label && (
        <span className="text-xs text-muted w-20 shrink-0">{label}</span>
      )}
      {children}
    </div>
  );
}
