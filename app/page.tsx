import { Suspense } from "react";
import ListingCard from "./components/ListingCard";
import MapFilterItems from "./components/MapFilterItems";
import prisma from "@/lib/db";
import SkeletonCard from "./components/SkeletonCard";
import NoItems from "./components/NoItems";

async function getData({
  // Show Filter Items
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedLocation: true,
      addedDescription: true,
      categoryName: searchParams?.filter ?? undefined,
    },
    select: {
      id: true,
      photo: true,
      price: true,
      descrption: true,
      country: true,
    },
  });
  return data;
}

export default function Home({
  // Show Filter Items
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-10">
        <MapFilterItems />

        <Suspense key={searchParams?.filter} fallback={<SkeletonLoading />}>
          <ShowItems searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
}

// Show Filter Items
async function ShowItems({
  // Show Filter Items
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await getData({ searchParams: searchParams });

  return (
    <>
      {data.length === 0 ? (
        <NoItems />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              imagePath={item.photo as string}
              description={item.descrption as string}
              location={item.country as string}
              price={item.price as number}
            />
          ))}
        </div>
      )}
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
