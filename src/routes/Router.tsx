import { Route, Routes } from "react-router-dom";
import { LoadComponent } from "../components/LoadComponent";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home";
import { NewPost } from "../pages/NewPost";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/post/:id" element={<LoadComponent />} /> 
      </Route>
    </Routes>
  );
}
