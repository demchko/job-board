import { FeaturedJobs } from "~/components/Dashboard/FeaturedJobs";
import { SearchJobs } from "~/components/Dashboard/SearchJobs";
import { Sidebar } from "~/components/Sidebar";
import { Input } from "~/components/ui/input";

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
        <SearchJobs />
        <FeaturedJobs />
      </div>
    </div>
  );
}
