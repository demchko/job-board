import { User } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { PositionWidget } from "./PositionWidget";

export const SearchJobs = () => {
  return (
    <div>
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
  );
};
