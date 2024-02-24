import { createCategoryPage } from "@/app/actions";
import CreationButtonBar from "@/app/components/CreationButtonBar";
import SelectedCategory from "@/app/components/SelectedCategory";
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
        <CreationButtonBar />
      </form>
      title
    </>
  );
};

export default StrucutreRoute;
