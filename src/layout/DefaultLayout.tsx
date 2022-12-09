import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { OutletContainer } from "./styles";

export function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </div>
  );
}
