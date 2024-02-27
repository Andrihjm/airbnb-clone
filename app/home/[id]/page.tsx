import { createReservation } from "@/app/actions";
import CategoryShowCase from "@/app/components/CategoryShowCase";
import { HomeMap } from "@/app/components/HomeMap";
import SelectedCalender from "@/app/components/SelectedCalender";
import { ReservationSubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/db";
import { useCountries } from "@/lib/getCounteries";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

async function getData(homeid: string) {
  noStore();
  const data = await prisma.home.findUnique({
    where: {
      id: homeid,
    },
    select: {
      photo: true,
      descrption: true,
      price: true,
      guests: true,
      badrooms: true,
      // bathrooms: true,
      title: true,
      categoryName: true,
      country: true,
      Reservation: {
        where: {
          homeId: homeid,
        },
      },
      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });
  return data;
}

export default async function HomeRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);

  // Variabel Kalender
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="w-[75%] mx-auto mt-10 mb-12">
      <h1 className="mb-5 font-medium text-2xl">{data?.title}</h1>

      <div className="relative h-[550px]">
        <Image
          src={`https://zlztspkvcjxoshfwcfeg.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          alt="Image of hoem"
          fill
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="text-xl font-medium">
            {country?.flag} {country?.label} / {country?.region}
          </h3>
          <div className="flex gap-x-2 text-muted-foreground">
            <p>{data?.guests}</p> Guests * {data?.badrooms} Badrooms
            {/* {data?.bathrooms} ----- TIDKA BISA DI PAKAI KARENA LUPA MASUKAN CODE DI FILE LUAR NYA ----- */}
          </div>

          <div className="flex items-center mt-6 gap-2">
            <img
              src={
                data?.User?.profileImage ??
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              }
              alt="User Profile"
              className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col mt-4">
              <h3 className="font-medium">Hosted by {data?.User?.firstName}</h3>
              <p className="text-sm text-muted-foreground">Host since 2015</p>
            </div>
          </div>

          <div>
            <Separator className="my-7" />
            <CategoryShowCase categoryName={data?.categoryName as string} />
            <Separator className="my-7" />
            <p className="text-muted-foreground">{data?.descrption}</p>
            <Separator className="my-7" />
            {/* <HomeMap locationValue={country?.value as string} /> */}
            <p>sebenarnya ini map wkkw</p>
          </div>
        </div>

        <form action={createReservation}>
          <input type="hidden" name="homeId" value={params.id} />
          <input type="hidden" name="userId" value={user?.id} />

          <SelectedCalender reservation={data?.Reservation} />

          {user?.id ? (
            <ReservationSubmitButton />
          ) : (
            <Button className="w-full" asChild>
              <Link href={"/api/auth/login"}>Make a Reservation</Link>
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
