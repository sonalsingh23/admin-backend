import { Outlet } from "react-router"
import NavBar from "../component/Navbar";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}