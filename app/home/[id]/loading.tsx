import { Skeleton } from "@/components/ui/skeleton";

export default function HomePageLoading() {
  return (
    <div className="w-[75%] mx-auto mt-10">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="w-full h-[550px] mt-5" />

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="">
          <Skeleton className="w-1/3 h-4" />
          <Skeleton className="w-1/3 h-4" />
        </div>

        <div className="w-1/3">
          <Skeleton className="w-full h-72" />
        </div>
      </div>
    </div>
  );
}
