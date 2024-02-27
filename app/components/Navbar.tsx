import Image from "next/image";
import Link from "next/link";

// Images
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import { UserNav } from "./UserNav";
import SearchComponent from "./Search";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="container flex items-center justify-between mx-auto px-5 py-5 lg:px-10">
        <Link href={"/"}>
          <Image
            src={DesktopLogo}
            alt="DesktopLogo"
            className="w-32 hidden lg:block"
          />

          <Image
            src={MobileLogo}
            alt="DesktopLogo"
            className="w-12 block lg:hidden"
          />
        </Link>

        <SearchComponent />

        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
