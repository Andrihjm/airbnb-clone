import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { createAirbnbHome } from "../actions";

// import UserDefault from "../../public/UserDefault.jpeg";
// import Image from "next/image";

export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const createHomewithId = createAirbnbHome.bind(null, {
    userId: user?.id as string
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-3 px-2 py-2 border rounded-full lg:px-4 lg:py-2">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          <img
            src={
              user?.picture ??
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            alt="Image of the user"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
              <form action={createHomewithId} className="w-full">
                <button type="submit" className="w-full">
                  Deluxe your home
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-homes" className="w-full">
                My Listing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/favorites" className="w-full">
                My Favorites
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-homes" className="w-full">
                My Reservation
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator /> {/* Menambahkan garis pembatas */}
            
            <DropdownMenuItem>
              <LogoutLink>LogOut</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Registers</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink>Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
