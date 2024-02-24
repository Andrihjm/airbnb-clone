import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SubmitButtons from "./SubmitButtons";

const CreationButtonBar = () => {
  return (
    <>
      <div className="fixed w-full h-24 bottom-0 bg-white border-t z-10">
        <div className="h-full flex items-center justify-between mx-auto px-5 lg:px-10">
          <Button variant={"secondary"} size={"lg"}>
            <Link href={"/"}>Cancel</Link>
          </Button>
          <SubmitButtons />
        </div>
      </div>
    </>
  );
};

export default CreationButtonBar;
