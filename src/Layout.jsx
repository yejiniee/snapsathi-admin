import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Layout() {
  return (
    <div className="flex h-full flex-1 flex-row bg-gray-50">
      <Sidebar />

      <div className="flex min-h-screen w-full flex-col">
        <Header title="고객 문의 관리" />
        <Outlet />
      </div>
    </div>
  );
}
