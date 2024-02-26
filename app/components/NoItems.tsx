import { FileQuestion } from "lucide-react";

interface IappProps {
  title: string,
  description: string,
}

const NoItems = ({title, description} : IappProps) => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 mt-10 text-center border border-dashed rounded-md animate-in fade-in-50">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
        <FileQuestion className="h-10 w-10 text-primary" />
      </div>
      <p className="mt-6 text-xl font-semibold">
        {title}
      </p>
      <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default NoItems;
