"use client";

import React, { useCallback } from "react";
import { categoryItems } from "../lib/categoryItems";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const MapFilterItems = () => {
  // State Search
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  //   Function to create query string
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  // console.log(search)

  return (
    <>
      <div className="w-full flex gap-x-10 mt-5 overflow-x-scroll">
        {categoryItems.map((item) => (
          <Link
            href={pathname + "?" + createQueryString("filter", item.name)}
            key={item.id}
            className={cn(
              search === item.name
                ? "border-b-2 border-black pb-2 flex-shrink-0"
                : "opacity-70 flex-shrink-0",
              "flex flex-col items-center"
            )}
          >
            <div className="relative h-6 w-6">
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </div>
            <p className="text-xs font-medium">{item.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MapFilterItems;
