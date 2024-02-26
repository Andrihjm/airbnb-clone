import { File } from "lucide-react";

const NoItems = () => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 mt-10 text-center border border-dashed rounded-md animate-in fade-in-50">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
        <File className="h-10 w-10 text-primary" />
      </div>
      <p className="mt-6 text-xl font-semibold">
        Sorry no listhings found for this category....
      </p>
      <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
        Please check a other category or create your own listings!
      </p>
    </div>
  );
};

export default NoItems;
