"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButtons = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled size={"lg"}>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Please Wait
        </Button>
      ) : (
        <Button type={"submit"} size={"lg"}>
          Next
        </Button>
      )}
    </>
  );
};

export default SubmitButtons;