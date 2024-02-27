import { useCountries } from "@/lib/getCounteries";
import Image from "next/image";
import Link from "next/link";
import { AddToFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButtons";
import { addToFavorite } from "../actions";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  userId: string | undefined;
  isInFavorite: boolean;
  favoriteId: string;
  homeId: string;
  pathName: string;
}

const ListingCard = ({
  imagePath,
  description,
  location,
  price,
  userId,
  favoriteId,
  isInFavorite,
  homeId,
  pathName,
}: iAppProps) => {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://zlztspkvcjxoshfwcfeg.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of House"
          fill
          className="h-full mb-3 rounded-lg object-cover"
        />
        {userId && (
          <div className="absolute top-2 right-2 z-10">
            {isInFavorite ? (
              <form action={DeleteFromFavoriteButton}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="homeId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="homeId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>

      <Link href={`/home/${homeId}`} className="mt-2">
        <h3 className="font-medium text-base">
          {country?.flag} {country?.label} {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">${price}</span> Night
        </p>
      </Link>
    </div>
  );
};

export default ListingCard;
