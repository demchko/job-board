import { cn } from "~/lib/utils";

export const FeaturedWidget = ({ color }: { color: string }) => {
  return (
    <div className={cn("w-1/3  p-3 rounded-xl", color)}>
      <div className="flex gap-3 items-center">
        <img
          className="w-12 h-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          alt="google"
        />
        <div>
          <p className="text-lg text-white">Software Engineer</p>
          <p className="text-sm text-white">Google</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 mt-4">
        <div className="bg-blue-200 px-4 py-1 rounded-xl text-white text-sm">
          IT
        </div>
        <div className="bg-blue-200 px-4 py-1 rounded-xl text-white text-sm truncate">
          Full-Time
        </div>
        <div className="bg-blue-200 px-4 py-1 rounded-xl text-white text-sm">
          Junior
        </div>
      </div>
      <div className="flex justify-between text-white mt-4">
        <p>$84000/y</p>
        <p>California, USA</p>
      </div>
    </div>
  );
};
