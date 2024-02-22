import SelectedCategory from "@/app/components/SelectedCategory";
import React from "react";

const StrucutreRoute = () => {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tighter transition-colors">
          Which of these best description yout Home?
        </h2>
      </div>

      <form>
        <SelectedCategory />
      </form>
    </>
  );
};

export default StrucutreRoute;
