import { Gitlab, LayoutDashboard } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-[7%] h-screen flex flex-col items-center py-5">
      <Gitlab className="text-blue-400 w-12 h-12" />
      <div className="flex flex-col mt-8">
        <LayoutDashboard className="text-gray-500" />
      </div>
    </div>
  );
};
