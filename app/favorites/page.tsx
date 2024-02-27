import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import ListingCard from "../components/ListingCard";
import NoItems from "../components/NoItems";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  noStore();
  const data = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          id: true,
          photo: true,
          Favorite: true,
          price: true,
          country: true,
          descrption: true,
        },
      },
    },
  });

  return data;
}

export default async function FavoriteRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");

  const data = await getData(user.id);

  return (
    <section className="container mx-auto py-5 mt-10 lg:px-10">
      <h2>Yoyur favorite</h2>

      {data.length === 0 ? (
        <NoItems
          title="Hey you do have any favorites"
          description="Please add favorites to see them right here...."
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.Home?.id}
              description={item.Home?.descrption as string}
              location={item.Home?.country as string}
              pathName="/favorites"
              homeId={item.Home?.id as string}
              imagePath={item.Home?.photo as string}
              price={item.Home?.price as number}
              userId={user.id}
              favoriteId={item.Home?.Favorite[0].id as string}
              isInFavorite={
                (item.Home?.Favorite.length as number) > 0 ? true : false
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
