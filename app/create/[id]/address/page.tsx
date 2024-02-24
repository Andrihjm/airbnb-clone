"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { useCountries } from "@/lib/getCounteries";
import { SelectValue } from "@radix-ui/react-select";

const page = () => {
  const { getAllCountries } = useCountries();

  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="mb-10 text-3xl font-semibold tracking-tighter transition-colors">
          where is your home located?
        </h2>
      </div>

      <form action="">
        <div className="w-3/5 mx-auto">
          <div className="mb-5">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an Country" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.flag} {item.label} / {item.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
