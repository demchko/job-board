import { Button } from "../ui/button";
import { FeaturedWidget } from "./FeaturedWidget";

export const FeaturedJobs = () => {
  return (
    <div className="mt-7">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">Featured Jobs</p>
        <Button variant="ghost" className="text-gray-400 text-sm">
          See all
        </Button>
      </div>
      <div className="flex gap-2">
        <FeaturedWidget color="bg-blue-400" />
        <FeaturedWidget color="bg-green-400" />
        <FeaturedWidget color="bg-orange-400" />
      </div>
    </div>
  );
};
