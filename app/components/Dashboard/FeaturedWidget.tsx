import { cn } from "~/lib/utils";
import { type FeturedJobsType } from "./FeaturedJobs";

type FeaturedWidgetProps = {
  item: FeturedJobsType;
};

export const FeaturedWidget = ({ item }: FeaturedWidgetProps) => {
  return (
    <div
      className={cn(
        "w-[32%] mt-3 p-3 rounded-xl bg-gradient-to-b cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg",
        item.background
      )}
    >
      <div className="flex gap-3 items-center">
        <img className="w-12 h-12" src={item.icon} alt="icon" />
        <div className=" overflow-hidden">
          <p className="text-lg text-white truncate">{item.position}</p>
          <p className="text-sm text-white">{item.company}</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 mt-4">
        {item.filters.map((filter) => (
          <div
            key={filter}
            className={cn(
              "bg-opacity-50 bg-gray-200 px-4 py-1 rounded-xl text-white text-sm truncate"
            )}
          >
            {filter}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-white mt-4 overflow-hidden gap-3">
        <p>{item.salary}</p>
        <p className="truncate">{item.place}</p>
      </div>
    </div>
  );
};
