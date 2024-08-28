import { useState } from "react";
import { Button } from "../ui/button";
import { FeaturedWidget } from "./FeaturedWidget";

export type FeturedJobsType = {
  id: number;
  position: string;
  company: string;
  salary: string;
  place: string;
  filters: string[];
  background: string;
  icon: string;
};

const feturedJobs: FeturedJobsType[] = [
  {
    id: 1,
    position: "Software Engineer",
    company: "Google",
    salary: "$84000/y",
    place: "California, USA",
    filters: ["IT", "Junior", "Full-Time"],
    background: "from-blue-300 to-blue-500",
    icon: "https://www.svgrepo.com/show/217131/google.svg",
  },
  {
    id: 2,
    position: "Frontend developer",
    company: "Google",
    salary: "$160000/y",
    place: "Berlin, Germany",
    filters: ["IT", "Middle", "Full-Time"],
    background: "from-pink-300 to-orange-500",
    icon: "https://www.svgrepo.com/show/217131/google.svg",
  },
  {
    id: 3,
    position: "UX Designer",
    company: "Telegram",
    salary: "$96000/y",
    place: "California, USA",
    filters: ["IT", "Middle", "Full-Time"],
    background: "from-purple-300 to-purple-500",
    icon: "https://www.svgrepo.com/show/452115/telegram.svg",
  },
  {
    id: 4,
    position: "UX Designer",
    company: "Telegram",
    salary: "$96000/y",
    place: "California, USA",
    filters: ["IT", "Middle", "Full-Time"],
    background: "from-red-300 to-red-500",
    icon: "https://www.svgrepo.com/show/452115/telegram.svg",
  },
  {
    id: 5,
    position: "UX Designer",
    company: "Telegram",
    salary: "$96000/y",
    place: "California, USA",
    filters: ["IT", "Middle", "Full-Time"],
    background: "from-green-300 to-green-500",
    icon: "https://www.svgrepo.com/show/452115/telegram.svg",
  },
  {
    id: 6,
    position: "UX Designer",
    company: "Telegram",
    salary: "$96000/y",
    place: "California, USA",
    filters: ["IT", "Middle", "Full-Time"],
    background: "from-yellow-300 to-yellow-500",
    icon: "https://www.svgrepo.com/show/452115/telegram.svg",
  },
];

export const FeaturedJobs = () => {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <div className="mt-7">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">Featured Jobs</p>
        <Button
          onClick={() => setSeeAll(!seeAll)}
          variant="ghost"
          className="text-gray-400 text-sm"
        >
          See all
        </Button>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {seeAll
          ? feturedJobs.map((item: FeturedJobsType) => (
              <FeaturedWidget key={item.id} item={item} />
            ))
          : feturedJobs
              .slice(0, 3)
              .map((item: FeturedJobsType) => (
                <FeaturedWidget key={item.id} item={item} />
              ))}
      </div>
    </div>
  );
};
