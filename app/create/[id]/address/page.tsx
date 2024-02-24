"use client";

import CreationButtonBar from "@/app/components/CreationButtonBar";
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
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const page = () => {

  // GET REGION
  const { getAllCountries } = useCountries(); 
  const [locationValue, setLocationValue] = useState("");

  // DI COMMAND KARENA ERROR 
  
  // const LazyMap = dynamic(() => import('@/app/components/Map'), {
  //   ssr: false,
  //   loading: () => <Skeleton className="w-full h-[50vh]" />
  // })

  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="mb-10 text-3xl font-semibold tracking-tighter transition-colors">
          where is your home located?
        </h2>
      </div>

      <form>
        <div className="w-3/5 mx-auto">
          <div className="mb-5">
            <Select required onValueChange={(value) => setLocationValue(value)}>
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

          {/* <LazyMap locationValue={locationValue} />   Tidak bisa di gunakan ye, ntah kenapa */}
        </div>

        <CreationButtonBar />
      </form>
    </>
  );
};

export default page;
