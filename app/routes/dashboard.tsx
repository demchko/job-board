import { User } from "lucide-react";
import { PositionWidget } from "~/components/Dashboard/PositionWidget";
import { Sidebar } from "~/components/Sidebar";
import { Input } from "~/components/ui/input";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="w-[35%] border-r border-gray-300 py-5 px-5">
        <p className="text-sm text-gray-400 font-medium">
          Search jobs from top Companies
        </p>
        <p className="text-xl font-medium">Find Mathcing Jobs</p>
        <Input
          className="mt-7 rounded-xl placeholder:text-gray-400"
          placeholder="Company"
        />
      </div>
      <div className="w-[58%] bg-gray-100 py-5 px-5">
        <div className="flex justify-center items-center w-full">
          <div className="w-1/2">
            <p className="text-sm text-gray-400 font-medium">
              Welcome to JobTrands
            </p>
            <p className="text-xl font-medium">Discover Jobs🔥</p>
          </div>
          <div className="w-1/2 flex items-center ">
            <Input
              className="rounded-xl placeholder:text-gray-400"
              placeholder="Search job or position"
            />
            <User className="w-10 h-10" />
          </div>
        </div>
        <ScrollArea className="mt-7">
          <div className="flex gap-5">
            <PositionWidget
              icon="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
              position="UX Designer"
              company="Google"
              salary="$84000/y"
            />
            <PositionWidget
              icon="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
              position="UX Designer"
              company="Google"
              salary="$84000/y"
            />
            <PositionWidget
              icon="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
              position="UX Designer"
              company="Google"
              salary="$84000/y"
            />
            <PositionWidget
              icon="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
              position="UX Designer"
              company="Google"
              salary="$84000/y"
            />
            <PositionWidget
              icon="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
              position="UX Designer"
              company="Google"
              salary="$84000/y"
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
