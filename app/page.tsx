import { Suspense } from "react";
import ListingCard from "./components/ListingCard";
import MapFilterItems from "./components/MapFilterItems";
import prisma from "@/lib/db";
import SkeletonCard from "./components/SkeletonCard";
import NoItems from "./components/NoItems";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData({
  // Show Filter Items
  searchParams,
  userId,
}: {
  userId: string | undefined;
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
      Favorite: {
        where: {
          userId: userId ?? undefined,
        },
      },
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
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData({ searchParams: searchParams, userId: user?.id });

  return (
    <>
      {data.length === 0 ? (
        <NoItems
          title="Sorry no listhings found for this category...."
          description="Please check a other category or create your own listings!"
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              imagePath={item.photo as string}
              description={item.descrption as string}
              location={item.country as string}
              price={item.price as number}
              userId={user?.id}
              favoriteId={item.Favorite[0]?.id}
              isInFavorite={item.Favorite.length > 0 ? true : false}
              homeId={item.id}
              pathName="/"
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
