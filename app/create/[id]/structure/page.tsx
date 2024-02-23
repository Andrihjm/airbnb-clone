import { createCategoryPage } from "@/app/actions";
import SelectedCategory from "@/app/components/SelectedCategory";
import SubmitButtons from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const StrucutreRoute = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tighter transition-colors">
          Which of these best description yout Home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectedCategory />
        <div className="fixed w-full h-24 bottom-0 bg-white border-t z-10">
          <div className="h-full flex items-center justify-between mx-auto px-5 lg:px-10">
            <Button variant={"secondary"} size={"lg"}>
              <Link href={"/"}>Cancel</Link>
            </Button>
            <SubmitButtons />
          </div>
        </div>
      </form>
    </>
  );
};

export default StrucutreRoute;
