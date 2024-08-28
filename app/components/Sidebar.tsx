import { Gitlab, LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "@remix-run/react";

export const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-[7%] h-screen flex flex-col items-center py-5 justify-between">
      <div>
        <Gitlab className="text-blue-400 w-12 h-12" />
        <div className="flex flex-col mt-8">
          <NavLink to="/dashboard">
            <LayoutDashboard className="text-gray-500 w-7 h-7 cursor-pointer" />
          </NavLink>
        </div>
      </div>
      <Button className="bg-blue-500">Logout</Button>
    </div>
  );
};
